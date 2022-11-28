import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Scores:
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

    
    def games_management_scores_reset(self, request: operations.GamesManagementScoresResetRequest) -> operations.GamesManagementScoresResetResponse:
        r"""Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1management/leaderboards/{leaderboardId}/scores/reset", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementScoresResetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlayerScoreResetResponse])
                res.player_score_reset_response = out

        return res

    
    def games_management_scores_reset_all(self, request: operations.GamesManagementScoresResetAllRequest) -> operations.GamesManagementScoresResetAllResponse:
        r"""Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/v1management/scores/reset"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementScoresResetAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlayerScoreResetAllResponse])
                res.player_score_reset_all_response = out

        return res

    
    def games_management_scores_reset_all_for_all_players(self, request: operations.GamesManagementScoresResetAllForAllPlayersRequest) -> operations.GamesManagementScoresResetAllForAllPlayersResponse:
        r"""Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/v1management/scores/resetAllForAllPlayers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementScoresResetAllForAllPlayersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def games_management_scores_reset_for_all_players(self, request: operations.GamesManagementScoresResetForAllPlayersRequest) -> operations.GamesManagementScoresResetForAllPlayersResponse:
        r"""Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1management/leaderboards/{leaderboardId}/scores/resetForAllPlayers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementScoresResetForAllPlayersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def games_management_scores_reset_multiple_for_all_players(self, request: operations.GamesManagementScoresResetMultipleForAllPlayersRequest) -> operations.GamesManagementScoresResetMultipleForAllPlayersResponse:
        r"""Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/v1management/scores/resetMultipleForAllPlayers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementScoresResetMultipleForAllPlayersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    