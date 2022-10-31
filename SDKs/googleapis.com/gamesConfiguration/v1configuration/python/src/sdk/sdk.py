import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://gamesconfiguration.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def games_configuration_achievement_configurations_delete(self, request: operations.GamesConfigurationAchievementConfigurationsDeleteRequest) -> operations.GamesConfigurationAchievementConfigurationsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1configuration/achievements/{achievementId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesConfigurationAchievementConfigurationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def games_configuration_achievement_configurations_get(self, request: operations.GamesConfigurationAchievementConfigurationsGetRequest) -> operations.GamesConfigurationAchievementConfigurationsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1configuration/achievements/{achievementId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesConfigurationAchievementConfigurationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AchievementConfiguration])
                res.achievement_configuration = out

        return res

    
    def games_configuration_achievement_configurations_insert(self, request: operations.GamesConfigurationAchievementConfigurationsInsertRequest) -> operations.GamesConfigurationAchievementConfigurationsInsertResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1configuration/applications/{applicationId}/achievements", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesConfigurationAchievementConfigurationsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AchievementConfiguration])
                res.achievement_configuration = out

        return res

    
    def games_configuration_achievement_configurations_list(self, request: operations.GamesConfigurationAchievementConfigurationsListRequest) -> operations.GamesConfigurationAchievementConfigurationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1configuration/applications/{applicationId}/achievements", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesConfigurationAchievementConfigurationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AchievementConfigurationListResponse])
                res.achievement_configuration_list_response = out

        return res

    
    def games_configuration_achievement_configurations_update(self, request: operations.GamesConfigurationAchievementConfigurationsUpdateRequest) -> operations.GamesConfigurationAchievementConfigurationsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1configuration/achievements/{achievementId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesConfigurationAchievementConfigurationsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AchievementConfiguration])
                res.achievement_configuration = out

        return res

    
    def games_configuration_image_configurations_upload(self, request: operations.GamesConfigurationImageConfigurationsUploadRequest) -> operations.GamesConfigurationImageConfigurationsUploadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1configuration/images/{resourceId}/imageType/{imageType}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesConfigurationImageConfigurationsUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageConfiguration])
                res.image_configuration = out

        return res

    
    def games_configuration_leaderboard_configurations_delete(self, request: operations.GamesConfigurationLeaderboardConfigurationsDeleteRequest) -> operations.GamesConfigurationLeaderboardConfigurationsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1configuration/leaderboards/{leaderboardId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesConfigurationLeaderboardConfigurationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def games_configuration_leaderboard_configurations_get(self, request: operations.GamesConfigurationLeaderboardConfigurationsGetRequest) -> operations.GamesConfigurationLeaderboardConfigurationsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1configuration/leaderboards/{leaderboardId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesConfigurationLeaderboardConfigurationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LeaderboardConfiguration])
                res.leaderboard_configuration = out

        return res

    
    def games_configuration_leaderboard_configurations_insert(self, request: operations.GamesConfigurationLeaderboardConfigurationsInsertRequest) -> operations.GamesConfigurationLeaderboardConfigurationsInsertResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1configuration/applications/{applicationId}/leaderboards", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesConfigurationLeaderboardConfigurationsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LeaderboardConfiguration])
                res.leaderboard_configuration = out

        return res

    
    def games_configuration_leaderboard_configurations_list(self, request: operations.GamesConfigurationLeaderboardConfigurationsListRequest) -> operations.GamesConfigurationLeaderboardConfigurationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1configuration/applications/{applicationId}/leaderboards", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesConfigurationLeaderboardConfigurationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LeaderboardConfigurationListResponse])
                res.leaderboard_configuration_list_response = out

        return res

    
    def games_configuration_leaderboard_configurations_update(self, request: operations.GamesConfigurationLeaderboardConfigurationsUpdateRequest) -> operations.GamesConfigurationLeaderboardConfigurationsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/games/v1configuration/leaderboards/{leaderboardId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesConfigurationLeaderboardConfigurationsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LeaderboardConfiguration])
                res.leaderboard_configuration = out

        return res

    