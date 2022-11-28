import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Leg:
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

    
    def delete_leg(self, request: operations.DeleteLegRequest) -> operations.DeleteLegResponse:
        r"""Delete a leg
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/legs/{leg_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteLegResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_leg_200_application_json_object = out

        return res

    
    def list_legs(self) -> operations.ListLegsResponse:
        r"""List legs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/legs"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListLegsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListLegs200ApplicationJSON])
                res.list_legs_200_application_json_object = out

        return res

    