import requests
from typing import Optional
from sdk.models import shared, operations
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

    
    def games_events_list_by_player(self, request: operations.GamesEventsListByPlayerRequest) -> operations.GamesEventsListByPlayerResponse:
        r"""Returns a list showing the current progress on events in this application for the currently authenticated user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/v1/events"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesEventsListByPlayerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PlayerEventListResponse])
                res.player_event_list_response = out

        return res

    
    def games_events_list_definitions(self, request: operations.GamesEventsListDefinitionsRequest) -> operations.GamesEventsListDefinitionsResponse:
        r"""Returns a list of the event definitions in this application.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/v1/eventDefinitions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesEventsListDefinitionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventDefinitionListResponse])
                res.event_definition_list_response = out

        return res

    
    def games_events_record(self, request: operations.GamesEventsRecordRequest) -> operations.GamesEventsRecordResponse:
        r"""Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/games/v1/events"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GamesEventsRecordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventUpdateResponse])
                res.event_update_response = out

        return res

    