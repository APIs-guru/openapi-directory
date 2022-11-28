import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Calendars:
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

    
    def calendar_calendars_clear(self, request: operations.CalendarCalendarsClearRequest) -> operations.CalendarCalendarsClearResponse:
        r"""Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}/clear", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarsClearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def calendar_calendars_delete(self, request: operations.CalendarCalendarsDeleteRequest) -> operations.CalendarCalendarsDeleteResponse:
        r"""Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def calendar_calendars_get(self, request: operations.CalendarCalendarsGetRequest) -> operations.CalendarCalendarsGetResponse:
        r"""Returns metadata for a calendar.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Calendar])
                res.calendar = out

        return res

    
    def calendar_calendars_insert(self, request: operations.CalendarCalendarsInsertRequest) -> operations.CalendarCalendarsInsertResponse:
        r"""Creates a secondary calendar.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/calendars"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Calendar])
                res.calendar = out

        return res

    
    def calendar_calendars_patch(self, request: operations.CalendarCalendarsPatchRequest) -> operations.CalendarCalendarsPatchResponse:
        r"""Updates metadata for a calendar. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Calendar])
                res.calendar = out

        return res

    
    def calendar_calendars_update(self, request: operations.CalendarCalendarsUpdateRequest) -> operations.CalendarCalendarsUpdateResponse:
        r"""Updates metadata for a calendar.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Calendar])
                res.calendar = out

        return res

    