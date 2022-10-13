import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"http://api.nytimes.com/svc/news/v3",
	"https://api.nytimes.com/svc/news/v3",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    def config_security(self, security: shared.Security):
        self.client = utils.configure_security_client(security)
    
    def get_content_json(self, request: operations.GetContentJSONRequest) -> operations.GetContentJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/content.json"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContentJSONResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetContentJSON200ApplicationJSON])
                res.get_content_json_200_application_json_object = out

        return res

    
    
    def get_content_source_section_json(self, request: operations.GetContentSourceSectionJSONRequest) -> operations.GetContentSourceSectionJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/content/{source}/{section}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContentSourceSectionJSONResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetContentSourceSectionJSON200ApplicationJSON])
                res.get_content_source_section_json_200_application_json_object = out

        return res

    
    
    def get_content_source_section_time_period_json(self, request: operations.GetContentSourceSectionTimePeriodJSONRequest) -> operations.GetContentSourceSectionTimePeriodJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/content/{source}/{section}/{time-period}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContentSourceSectionTimePeriodJSONResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetContentSourceSectionTimePeriodJSON200ApplicationJSON])
                res.get_content_source_section_time_period_json_200_application_json_object = out

        return res

    