import requests
from typing import Optional
from sdk.models import shared, operations
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

    
    def games_players_get(self, request: operations.GamesPlayersGetRequest) -> operations.GamesPlayersGetResponse:
        r"""Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1/players/{playerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesPlayersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Player])
                res.player = out

        return res

    
    def games_players_get_scoped_player_ids(self, request: operations.GamesPlayersGetScopedPlayerIdsRequest) -> operations.GamesPlayersGetScopedPlayerIdsResponse:
        r"""Retrieves scoped player identifiers for currently authenticated user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/v1/players/me/scopedIds"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesPlayersGetScopedPlayerIdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScopedPlayerIds])
                res.scoped_player_ids = out

        return res

    
    def games_players_list(self, request: operations.GamesPlayersListRequest) -> operations.GamesPlayersListResponse:
        r"""Get the collection of players for the currently authenticated user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1/players/me/players/{collection}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesPlayersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlayerListResponse])
                res.player_list_response = out

        return res

    