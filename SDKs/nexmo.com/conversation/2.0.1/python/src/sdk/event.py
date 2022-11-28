import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class Event:
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

    
    def create_event(self, request: operations.CreateEventRequest) -> operations.CreateEventResponse:
        r"""Create an event
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/events", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateEventResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateEvent201ApplicationJSON])
                res.create_event_201_application_json_object = out

        return res

    
    def delete_event(self, request: operations.DeleteEventRequest) -> operations.DeleteEventResponse:
        r"""Delete an event
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/events/{event_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteEventResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_event_200_application_json_object = out

        return res

    
    def get_event(self, request: operations.GetEventRequest) -> operations.GetEventResponse:
        r"""Retrieve an event
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/events/{event_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventRetrieved])
                res.event_retrieved = out

        return res

    
    def get_events(self, request: operations.GetEventsRequest) -> operations.GetEventsResponse:
        r"""List events
        This endpoint is **DEPRECATED**. Please use [/v0.2/events](/api/conversation.v2#get-events).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/events", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.EventRetrieved]])
                res.event_retrieveds = out

        return res

    