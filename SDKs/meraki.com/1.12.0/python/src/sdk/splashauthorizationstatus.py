import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class SplashAuthorizationStatus:
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

    
    def get_network_client_splash_authorization_status(self, request: operations.GetNetworkClientSplashAuthorizationStatusRequest) -> operations.GetNetworkClientSplashAuthorizationStatusResponse:
        r"""Return the splash authorization for a client, for each SSID they've associated with through splash
        Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/splashAuthorizationStatus", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkClientSplashAuthorizationStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_client_splash_authorization_status_200_application_json_object = out

        return res

    
    def update_network_client_splash_authorization_status(self, request: operations.UpdateNetworkClientSplashAuthorizationStatusRequest) -> operations.UpdateNetworkClientSplashAuthorizationStatusResponse:
        r"""Update a client's splash authorization
        Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/clients/{clientId}/splashAuthorizationStatus", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateNetworkClientSplashAuthorizationStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.update_network_client_splash_authorization_status_200_application_json_object = out

        return res

    