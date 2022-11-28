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

    
    def calendar_events_delete(self, request: operations.CalendarEventsDeleteRequest) -> operations.CalendarEventsDeleteResponse:
        r"""Deletes an event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events/{eventId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def calendar_events_get(self, request: operations.CalendarEventsGetRequest) -> operations.CalendarEventsGetResponse:
        r"""Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events/{eventId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Event])
                res.event = out

        return res

    
    def calendar_events_import(self, request: operations.CalendarEventsImportRequest) -> operations.CalendarEventsImportResponse:
        r"""Imports an event. This operation is used to add a private copy of an existing event to a calendar.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events/import", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Event])
                res.event = out

        return res

    
    def calendar_events_insert(self, request: operations.CalendarEventsInsertRequest) -> operations.CalendarEventsInsertResponse:
        r"""Creates an event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Event])
                res.event = out

        return res

    
    def calendar_events_instances(self, request: operations.CalendarEventsInstancesRequest) -> operations.CalendarEventsInstancesResponse:
        r"""Returns instances of the specified recurring event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events/{eventId}/instances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Events])
                res.events = out

        return res

    
    def calendar_events_list(self, request: operations.CalendarEventsListRequest) -> operations.CalendarEventsListResponse:
        r"""Returns events on the specified calendar.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Events])
                res.events = out

        return res

    
    def calendar_events_move(self, request: operations.CalendarEventsMoveRequest) -> operations.CalendarEventsMoveResponse:
        r"""Moves an event to another calendar, i.e. changes an event's organizer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events/{eventId}/move", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsMoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Event])
                res.event = out

        return res

    
    def calendar_events_patch(self, request: operations.CalendarEventsPatchRequest) -> operations.CalendarEventsPatchResponse:
        r"""Updates an event. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events/{eventId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Event])
                res.event = out

        return res

    
    def calendar_events_quick_add(self, request: operations.CalendarEventsQuickAddRequest) -> operations.CalendarEventsQuickAddResponse:
        r"""Creates an event based on a simple text string.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events/quickAdd", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsQuickAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Event])
                res.event = out

        return res

    
    def calendar_events_update(self, request: operations.CalendarEventsUpdateRequest) -> operations.CalendarEventsUpdateResponse:
        r"""Updates an event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events/{eventId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Event])
                res.event = out

        return res

    
    def calendar_events_watch(self, request: operations.CalendarEventsWatchRequest) -> operations.CalendarEventsWatchResponse:
        r"""Watch for changes to Events resources.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events/watch", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsWatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    