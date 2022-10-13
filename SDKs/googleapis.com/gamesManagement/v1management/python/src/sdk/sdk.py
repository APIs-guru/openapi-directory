import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://gamesmanagement.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def games_management_achievements_reset(self, request: operations.GamesManagementAchievementsResetRequest) -> operations.GamesManagementAchievementsResetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1management/achievements/{achievementId}/reset", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementAchievementsResetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AchievementResetResponse])
                res.achievement_reset_response = out

        return res

    
    
    def games_management_achievements_reset_all(self, request: operations.GamesManagementAchievementsResetAllRequest) -> operations.GamesManagementAchievementsResetAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/games/v1management/achievements/reset"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementAchievementsResetAllResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AchievementResetAllResponse])
                res.achievement_reset_all_response = out

        return res

    
    
    def games_management_achievements_reset_all_for_all_players(self, request: operations.GamesManagementAchievementsResetAllForAllPlayersRequest) -> operations.GamesManagementAchievementsResetAllForAllPlayersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/games/v1management/achievements/resetAllForAllPlayers"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementAchievementsResetAllForAllPlayersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def games_management_achievements_reset_for_all_players(self, request: operations.GamesManagementAchievementsResetForAllPlayersRequest) -> operations.GamesManagementAchievementsResetForAllPlayersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1management/achievements/{achievementId}/resetForAllPlayers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementAchievementsResetForAllPlayersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def games_management_achievements_reset_multiple_for_all_players(self, request: operations.GamesManagementAchievementsResetMultipleForAllPlayersRequest) -> operations.GamesManagementAchievementsResetMultipleForAllPlayersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/games/v1management/achievements/resetMultipleForAllPlayers"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementAchievementsResetMultipleForAllPlayersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def games_management_applications_list_hidden(self, request: operations.GamesManagementApplicationsListHiddenRequest) -> operations.GamesManagementApplicationsListHiddenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1management/applications/{applicationId}/players/hidden", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementApplicationsListHiddenResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HiddenPlayerList])
                res.hidden_player_list = out

        return res

    
    
    def games_management_events_reset(self, request: operations.GamesManagementEventsResetRequest) -> operations.GamesManagementEventsResetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1management/events/{eventId}/reset", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementEventsResetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def games_management_events_reset_all(self, request: operations.GamesManagementEventsResetAllRequest) -> operations.GamesManagementEventsResetAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/games/v1management/events/reset"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementEventsResetAllResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def games_management_events_reset_all_for_all_players(self, request: operations.GamesManagementEventsResetAllForAllPlayersRequest) -> operations.GamesManagementEventsResetAllForAllPlayersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/games/v1management/events/resetAllForAllPlayers"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementEventsResetAllForAllPlayersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def games_management_events_reset_for_all_players(self, request: operations.GamesManagementEventsResetForAllPlayersRequest) -> operations.GamesManagementEventsResetForAllPlayersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1management/events/{eventId}/resetForAllPlayers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementEventsResetForAllPlayersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def games_management_events_reset_multiple_for_all_players(self, request: operations.GamesManagementEventsResetMultipleForAllPlayersRequest) -> operations.GamesManagementEventsResetMultipleForAllPlayersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/games/v1management/events/resetMultipleForAllPlayers"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementEventsResetMultipleForAllPlayersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def games_management_players_hide(self, request: operations.GamesManagementPlayersHideRequest) -> operations.GamesManagementPlayersHideResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1management/applications/{applicationId}/players/hidden/{playerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementPlayersHideResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def games_management_players_unhide(self, request: operations.GamesManagementPlayersUnhideRequest) -> operations.GamesManagementPlayersUnhideResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1management/applications/{applicationId}/players/hidden/{playerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementPlayersUnhideResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def games_management_scores_reset(self, request: operations.GamesManagementScoresResetRequest) -> operations.GamesManagementScoresResetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1management/leaderboards/{leaderboardId}/scores/reset", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementScoresResetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlayerScoreResetResponse])
                res.player_score_reset_response = out

        return res

    
    
    def games_management_scores_reset_all(self, request: operations.GamesManagementScoresResetAllRequest) -> operations.GamesManagementScoresResetAllResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/games/v1management/scores/reset"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementScoresResetAllResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlayerScoreResetAllResponse])
                res.player_score_reset_all_response = out

        return res

    
    
    def games_management_scores_reset_all_for_all_players(self, request: operations.GamesManagementScoresResetAllForAllPlayersRequest) -> operations.GamesManagementScoresResetAllForAllPlayersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/games/v1management/scores/resetAllForAllPlayers"
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementScoresResetAllForAllPlayersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def games_management_scores_reset_for_all_players(self, request: operations.GamesManagementScoresResetForAllPlayersRequest) -> operations.GamesManagementScoresResetForAllPlayersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1management/leaderboards/{leaderboardId}/scores/resetForAllPlayers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementScoresResetForAllPlayersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    
    
    def games_management_scores_reset_multiple_for_all_players(self, request: operations.GamesManagementScoresResetMultipleForAllPlayersRequest) -> operations.GamesManagementScoresResetMultipleForAllPlayersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/games/v1management/scores/resetMultipleForAllPlayers"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementScoresResetMultipleForAllPlayersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass

        return res

    