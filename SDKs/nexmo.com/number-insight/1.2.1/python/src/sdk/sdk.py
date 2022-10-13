import warnings
import requests
from typing import Any,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://api.nexmo.com/ni",
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
    
    def get_number_insight_advanced(self, request: operations.GetNumberInsightAdvancedRequest) -> operations.GetNumberInsightAdvancedResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/advanced/{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumberInsightAdvancedResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_number_insight_advanced_200_application_json_one_of = out
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    
    def get_number_insight_async(self, request: operations.GetNumberInsightAsyncRequest) -> operations.GetNumberInsightAsyncResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/advanced/async/{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumberInsightAsyncResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_number_insight_async_200_application_json_one_of = out
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    
    def get_number_insight_basic(self, request: operations.GetNumberInsightBasicRequest) -> operations.GetNumberInsightBasicResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/basic/{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumberInsightBasicResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NiResponseJSONBasic])
                res.ni_response_json_basic = out
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    
    def get_number_insight_standard(self, request: operations.GetNumberInsightStandardRequest) -> operations.GetNumberInsightStandardResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/standard/{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNumberInsightStandardResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_number_insight_standard_200_application_json_one_of = out
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    