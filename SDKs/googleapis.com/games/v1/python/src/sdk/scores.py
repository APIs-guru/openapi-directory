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

    
    def games_scores_get(self, request: operations.GamesScoresGetRequest) -> operations.GamesScoresGetResponse:
        r"""Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1/players/{playerId}/leaderboards/{leaderboardId}/scores/{timeSpan}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesScoresGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlayerLeaderboardScoreListResponse])
                res.player_leaderboard_score_list_response = out

        return res

    
    def games_scores_list(self, request: operations.GamesScoresListRequest) -> operations.GamesScoresListResponse:
        r"""Lists the scores in a leaderboard, starting from the top.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1/leaderboards/{leaderboardId}/scores/{collection}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesScoresListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LeaderboardScores])
                res.leaderboard_scores = out

        return res

    
    def games_scores_list_window(self, request: operations.GamesScoresListWindowRequest) -> operations.GamesScoresListWindowResponse:
        r"""Lists the scores in a leaderboard around (and including) a player's score.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1/leaderboards/{leaderboardId}/window/{collection}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesScoresListWindowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LeaderboardScores])
                res.leaderboard_scores = out

        return res

    
    def games_scores_submit(self, request: operations.GamesScoresSubmitRequest) -> operations.GamesScoresSubmitResponse:
        r"""Submits a score to the specified leaderboard.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1/leaderboards/{leaderboardId}/scores", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesScoresSubmitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlayerScoreResponse])
                res.player_score_response = out

        return res

    
    def games_scores_submit_multiple(self, request: operations.GamesScoresSubmitMultipleRequest) -> operations.GamesScoresSubmitMultipleResponse:
        r"""Submits multiple scores to leaderboards.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/v1/leaderboards/scores"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesScoresSubmitMultipleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlayerScoreListResponse])
                res.player_score_list_response = out

        return res

    