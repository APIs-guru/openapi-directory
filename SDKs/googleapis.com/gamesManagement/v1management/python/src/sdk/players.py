import requests
from sdk.models import operations
from . import utils

class Players:
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

    
    def games_management_players_hide(self, request: operations.GamesManagementPlayersHideRequest) -> operations.GamesManagementPlayersHideResponse:
        r"""Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1management/applications/{applicationId}/players/hidden/{playerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementPlayersHideResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def games_management_players_unhide(self, request: operations.GamesManagementPlayersUnhideRequest) -> operations.GamesManagementPlayersUnhideResponse:
        r"""Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1management/applications/{applicationId}/players/hidden/{playerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementPlayersUnhideResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    