
__doc__ = """ SDK Documentation: http://developer.nytimes.com/"""
import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"http://api.nytimes.com/svc/news/v3",
	"https://api.nytimes.com/svc/news/v3",
]


class SDK:
    r"""SDK Documentation: http://developer.nytimes.com/"""

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def get_content_json(self, request: operations.GetContentJSONRequest) -> operations.GetContentJSONResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/content.json"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContentJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetContentJSON200ApplicationJSON])
                res.get_content_json_200_application_json_object = out

        return res

    
    def get_content_source_section_json(self, request: operations.GetContentSourceSectionJSONRequest) -> operations.GetContentSourceSectionJSONResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/content/{source}/{section}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContentSourceSectionJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetContentSourceSectionJSON200ApplicationJSON])
                res.get_content_source_section_json_200_application_json_object = out

        return res

    
    def get_content_source_section_time_period_json(self, request: operations.GetContentSourceSectionTimePeriodJSONRequest) -> operations.GetContentSourceSectionTimePeriodJSONResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/content/{source}/{section}/{time-period}.json", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetContentSourceSectionTimePeriodJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetContentSourceSectionTimePeriodJSON200ApplicationJSON])
                res.get_content_source_section_time_period_json_200_application_json_object = out

        return res

    