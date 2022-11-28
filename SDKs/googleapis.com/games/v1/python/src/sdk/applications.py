import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Applications:
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

    
    def games_applications_get(self, request: operations.GamesApplicationsGetRequest) -> operations.GamesApplicationsGetResponse:
        r"""Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1/applications/{applicationId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesApplicationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Application])
                res.application = out

        return res

    
    def games_applications_get_end_point(self, request: operations.GamesApplicationsGetEndPointRequest) -> operations.GamesApplicationsGetEndPointResponse:
        r"""Returns a URL for the requested end point type.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/v1/applications/getEndPoint"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesApplicationsGetEndPointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EndPoint])
                res.end_point = out

        return res

    
    def games_applications_played(self, request: operations.GamesApplicationsPlayedRequest) -> operations.GamesApplicationsPlayedResponse:
        r"""Indicate that the currently authenticated user is playing your application.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/v1/applications/played"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesApplicationsPlayedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def games_applications_verify(self, request: operations.GamesApplicationsVerifyRequest) -> operations.GamesApplicationsVerifyResponse:
        r"""Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1/applications/{applicationId}/verify", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesApplicationsVerifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ApplicationVerifyResponse])
                res.application_verify_response = out

        return res

    