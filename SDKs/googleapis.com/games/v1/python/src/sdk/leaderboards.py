import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Leaderboards:
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

    
    def games_leaderboards_get(self, request: operations.GamesLeaderboardsGetRequest) -> operations.GamesLeaderboardsGetResponse:
        r"""Retrieves the metadata of the leaderboard with the given ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1/leaderboards/{leaderboardId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesLeaderboardsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Leaderboard])
                res.leaderboard = out

        return res

    
    def games_leaderboards_list(self, request: operations.GamesLeaderboardsListRequest) -> operations.GamesLeaderboardsListResponse:
        r"""Lists all the leaderboard metadata for your application.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/v1/leaderboards"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesLeaderboardsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LeaderboardListResponse])
                res.leaderboard_list_response = out

        return res

    