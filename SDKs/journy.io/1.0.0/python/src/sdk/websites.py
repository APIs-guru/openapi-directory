import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Websites:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_tracking_snippet(self, request: operations.GetTrackingSnippetRequest) -> operations.GetTrackingSnippetResponse:
        r"""Get snippet for a website
        Endpoint used to get a snippet for a website.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tracking/snippet"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTrackingSnippetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTrackingSnippet200ApplicationJSON])
                res.get_tracking_snippet_200_application_json_object = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTrackingSnippet400ApplicationJSON])
                res.get_tracking_snippet_400_application_json_object = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTrackingSnippet401ApplicationJSON])
                res.get_tracking_snippet_401_application_json_object = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTrackingSnippet403ApplicationJSON])
                res.get_tracking_snippet_403_application_json_object = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTrackingSnippet404ApplicationJSON])
                res.get_tracking_snippet_404_application_json_object = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTrackingSnippet429ApplicationJSON])
                res.get_tracking_snippet_429_application_json_object = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTrackingSnippet500ApplicationJSON])
                res.get_tracking_snippet_500_application_json_object = out

        return res

    