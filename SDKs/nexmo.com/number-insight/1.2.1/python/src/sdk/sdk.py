
__doc__ = """ SDK Documentation: https://developer.nexmo.com/api/number-insight"""
import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.nexmo.com/ni",
]


class SDK:
    r"""SDK Documentation: https://developer.nexmo.com/api/number-insight"""

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
        
    
    
    
    def get_number_insight_advanced(self, request: operations.GetNumberInsightAdvancedRequest) -> operations.GetNumberInsightAdvancedResponse:
        r"""Advanced Number Insight (sync)
        Provides [advanced number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number synchronously, in the same way that the basic and standard endpoints do.
        
        Vonage recommends accessing the Advanced API **asynchronously** using the `/advanced/async` endpoint, to avoid timeouts.
        
        Note that this endpoint also supports `POST` requests.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/advanced/{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
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
        r"""Advanced Number Insight (async)
        Provides [advanced number insight](/number-insight/overview#basic-standard-and-advanced-apis) number information **asynchronously** using the URL specified in the `callback` parameter.  recommends asynchronous use of the Number Insight Advanced API, to avoid timeouts.
        
        Note that this endpoint also supports `POST` requests.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/advanced/async/{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
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
        r"""Basic Number Insight
        Provides [basic number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number.
        
        Note that this endpoint also supports `POST` requests.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/basic/{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
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
        r"""Standard Number Insight
        Provides [standard number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number.
        
        Note that this endpoint also supports `POST` requests.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/standard/{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
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

    