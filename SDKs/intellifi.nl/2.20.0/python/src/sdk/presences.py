import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Presences:
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

    
    def get_presence_by_id(self, request: operations.GetPresenceByIDRequest) -> operations.GetPresenceByIDResponse:
        r"""Get presence
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/presences/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPresenceByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Presence])
                res.presence = out

        return res

    
    def get_presences(self, request: operations.GetPresencesRequest) -> operations.GetPresencesResponse:
        r"""Get all presences
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/presences"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPresencesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPresences200ApplicationJSON])
                res.get_presences_200_application_json_object = out

        return res

    