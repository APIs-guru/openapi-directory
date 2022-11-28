import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Validation:
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

    
    def get_validity(self) -> operations.GetValidityResponse:
        r"""Validate API key
        Endpoint used to test the validity and some basic information about a specific API Key.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/validate"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetValidityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetValidity200ApplicationJSON])
                res.get_validity_200_application_json_object = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetValidity401ApplicationJSON])
                res.get_validity_401_application_json_object = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetValidity403ApplicationJSON])
                res.get_validity_403_application_json_object = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetValidity429ApplicationJSON])
                res.get_validity_429_application_json_object = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetValidity500ApplicationJSON])
                res.get_validity_500_application_json_object = out

        return res

    