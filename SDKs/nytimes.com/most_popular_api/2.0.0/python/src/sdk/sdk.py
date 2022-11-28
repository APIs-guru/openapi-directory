
__doc__ = """ SDK Documentation: http://developer.nytimes.com/"""
import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"http://api.nytimes.com/svc/mostpopular/v2",
	"https://api.nytimes.com/svc/mostpopular/v2",
]


class SDK:
    r"""SDK Documentation: http://developer.nytimes.com/"""

    _client: requests.Session
    _security_client: requests.Session
    
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
        
    
    
    
    def get_mostemailed_section_time_period_json(self, request: operations.GetMostemailedSectionTimePeriodJSONRequest) -> operations.GetMostemailedSectionTimePeriodJSONResponse:
        r"""Most Emailed by Section & Time Period
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mostemailed/{section}/{time-period}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""Most Shared by Section & Time Period
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mostshared/{section}/{time-period}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""Most Viewed by Section & Time Period
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mostviewed/{section}/{time-period}.json", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMostviewedSectionTimePeriodJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetMostviewedSectionTimePeriodJSON200ApplicationJSON])
                res.get_mostviewed_section_time_period_json_200_application_json_object = out

        return res

    