import warnings
import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"http://api.nytimes.com/svc/mostpopular/v2",
	"https://api.nytimes.com/svc/mostpopular/v2",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def get_mostemailed_section_time_period_json(self, request: operations.GetMostemailedSectionTimePeriodJSONRequest) -> operations.GetMostemailedSectionTimePeriodJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mostemailed/{section}/{time-period}.json", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMostemailedSectionTimePeriodJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMostemailedSectionTimePeriodJSON200ApplicationJSON])
                res.get_mostemailed_section_time_period_json_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMostemailedSectionTimePeriodJSON400ApplicationJSON])
                res.get_mostemailed_section_time_period_json_400_application_json_object = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_mostemailed_section_time_period_json_403_application_json_object = out

        return res

    
    def get_mostshared_section_time_period_json(self, request: operations.GetMostsharedSectionTimePeriodJSONRequest) -> operations.GetMostsharedSectionTimePeriodJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mostshared/{section}/{time-period}.json", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMostsharedSectionTimePeriodJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMostsharedSectionTimePeriodJSON200ApplicationJSON])
                res.get_mostshared_section_time_period_json_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMostsharedSectionTimePeriodJSON400ApplicationJSON])
                res.get_mostshared_section_time_period_json_400_application_json_object = out

        return res

    
    def get_mostviewed_section_time_period_json(self, request: operations.GetMostviewedSectionTimePeriodJSONRequest) -> operations.GetMostviewedSectionTimePeriodJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/mostviewed/{section}/{time-period}.json", request.path_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMostviewedSectionTimePeriodJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMostviewedSectionTimePeriodJSON200ApplicationJSON])
                res.get_mostviewed_section_time_period_json_200_application_json_object = out

        return res

    