import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Achievements:
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

    
    def games_achievements_increment(self, request: operations.GamesAchievementsIncrementRequest) -> operations.GamesAchievementsIncrementResponse:
        r"""Increments the steps of the achievement with the given ID for the currently authenticated player.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1/achievements/{achievementId}/increment", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesAchievementsIncrementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AchievementIncrementResponse])
                res.achievement_increment_response = out

        return res

    
    def games_achievements_list(self, request: operations.GamesAchievementsListRequest) -> operations.GamesAchievementsListResponse:
        r"""Lists the progress for all your application's achievements for the currently authenticated player.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1/players/{playerId}/achievements", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesAchievementsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlayerAchievementListResponse])
                res.player_achievement_list_response = out

        return res

    
    def games_achievements_reveal(self, request: operations.GamesAchievementsRevealRequest) -> operations.GamesAchievementsRevealResponse:
        r"""Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1/achievements/{achievementId}/reveal", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesAchievementsRevealResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AchievementRevealResponse])
                res.achievement_reveal_response = out

        return res

    
    def games_achievements_set_steps_at_least(self, request: operations.GamesAchievementsSetStepsAtLeastRequest) -> operations.GamesAchievementsSetStepsAtLeastResponse:
        r"""Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1/achievements/{achievementId}/setStepsAtLeast", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesAchievementsSetStepsAtLeastResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AchievementSetStepsAtLeastResponse])
                res.achievement_set_steps_at_least_response = out

        return res

    
    def games_achievements_unlock(self, request: operations.GamesAchievementsUnlockRequest) -> operations.GamesAchievementsUnlockResponse:
        r"""Unlocks this achievement for the currently authenticated player.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1/achievements/{achievementId}/unlock", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesAchievementsUnlockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AchievementUnlockResponse])
                res.achievement_unlock_response = out

        return res

    
    def games_achievements_update_multiple(self, request: operations.GamesAchievementsUpdateMultipleRequest) -> operations.GamesAchievementsUpdateMultipleResponse:
        r"""Updates multiple achievements for the currently authenticated player.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/v1/achievements/updateMultiple"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesAchievementsUpdateMultipleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AchievementUpdateMultipleResponse])
                res.achievement_update_multiple_response = out

        return res

    