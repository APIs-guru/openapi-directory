import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class AchievementConfigurations:
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

    
    def games_configuration_achievement_configurations_delete(self, request: operations.GamesConfigurationAchievementConfigurationsDeleteRequest) -> operations.GamesConfigurationAchievementConfigurationsDeleteResponse:
        r"""Delete the achievement configuration with the given ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1configuration/achievements/{achievementId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesConfigurationAchievementConfigurationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def games_configuration_achievement_configurations_get(self, request: operations.GamesConfigurationAchievementConfigurationsGetRequest) -> operations.GamesConfigurationAchievementConfigurationsGetResponse:
        r"""Retrieves the metadata of the achievement configuration with the given ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1configuration/achievements/{achievementId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesConfigurationAchievementConfigurationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AchievementConfiguration])
                res.achievement_configuration = out

        return res

    
    def games_configuration_achievement_configurations_insert(self, request: operations.GamesConfigurationAchievementConfigurationsInsertRequest) -> operations.GamesConfigurationAchievementConfigurationsInsertResponse:
        r"""Insert a new achievement configuration in this application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1configuration/applications/{applicationId}/achievements", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesConfigurationAchievementConfigurationsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AchievementConfiguration])
                res.achievement_configuration = out

        return res

    
    def games_configuration_achievement_configurations_list(self, request: operations.GamesConfigurationAchievementConfigurationsListRequest) -> operations.GamesConfigurationAchievementConfigurationsListResponse:
        r"""Returns a list of the achievement configurations in this application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1configuration/applications/{applicationId}/achievements", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesConfigurationAchievementConfigurationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AchievementConfigurationListResponse])
                res.achievement_configuration_list_response = out

        return res

    
    def games_configuration_achievement_configurations_update(self, request: operations.GamesConfigurationAchievementConfigurationsUpdateRequest) -> operations.GamesConfigurationAchievementConfigurationsUpdateResponse:
        r"""Update the metadata of the achievement configuration with the given ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1configuration/achievements/{achievementId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesConfigurationAchievementConfigurationsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AchievementConfiguration])
                res.achievement_configuration = out

        return res

    