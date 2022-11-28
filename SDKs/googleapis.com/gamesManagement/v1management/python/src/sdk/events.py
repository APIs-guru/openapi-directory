import requests
from sdk.models import operations
from . import utils

class Events:
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

    
    def games_management_events_reset(self, request: operations.GamesManagementEventsResetRequest) -> operations.GamesManagementEventsResetResponse:
        r"""Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1management/events/{eventId}/reset", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementEventsResetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def games_management_events_reset_all(self, request: operations.GamesManagementEventsResetAllRequest) -> operations.GamesManagementEventsResetAllResponse:
        r"""Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/v1management/events/reset"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementEventsResetAllResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def games_management_events_reset_all_for_all_players(self, request: operations.GamesManagementEventsResetAllForAllPlayersRequest) -> operations.GamesManagementEventsResetAllForAllPlayersResponse:
        r"""Resets all draft events for all players. This method is only available to user accounts for your developer console.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/v1management/events/resetAllForAllPlayers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementEventsResetAllForAllPlayersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def games_management_events_reset_for_all_players(self, request: operations.GamesManagementEventsResetForAllPlayersRequest) -> operations.GamesManagementEventsResetForAllPlayersResponse:
        r"""Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/games/v1management/events/{eventId}/resetForAllPlayers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementEventsResetForAllPlayersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def games_management_events_reset_multiple_for_all_players(self, request: operations.GamesManagementEventsResetMultipleForAllPlayersRequest) -> operations.GamesManagementEventsResetMultipleForAllPlayersResponse:
        r"""Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/v1management/events/resetMultipleForAllPlayers"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesManagementEventsResetMultipleForAllPlayersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    