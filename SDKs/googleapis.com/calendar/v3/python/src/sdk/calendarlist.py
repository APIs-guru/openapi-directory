import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CalendarList:
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

    
    def calendar_calendar_list_delete(self, request: operations.CalendarCalendarListDeleteRequest) -> operations.CalendarCalendarListDeleteResponse:
        r"""Removes a calendar from the user's calendar list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/me/calendarList/{calendarId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarListDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def calendar_calendar_list_get(self, request: operations.CalendarCalendarListGetRequest) -> operations.CalendarCalendarListGetResponse:
        r"""Returns a calendar from the user's calendar list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/me/calendarList/{calendarId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarListGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarListEntry])
                res.calendar_list_entry = out

        return res

    
    def calendar_calendar_list_insert(self, request: operations.CalendarCalendarListInsertRequest) -> operations.CalendarCalendarListInsertResponse:
        r"""Inserts an existing calendar into the user's calendar list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/calendarList"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarListInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarListEntry])
                res.calendar_list_entry = out

        return res

    
    def calendar_calendar_list_list(self, request: operations.CalendarCalendarListListRequest) -> operations.CalendarCalendarListListResponse:
        r"""Returns the calendars on the user's calendar list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/calendarList"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarListListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarList])
                res.calendar_list = out

        return res

    
    def calendar_calendar_list_patch(self, request: operations.CalendarCalendarListPatchRequest) -> operations.CalendarCalendarListPatchResponse:
        r"""Updates an existing calendar on the user's calendar list. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/me/calendarList/{calendarId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarListPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarListEntry])
                res.calendar_list_entry = out

        return res

    
    def calendar_calendar_list_update(self, request: operations.CalendarCalendarListUpdateRequest) -> operations.CalendarCalendarListUpdateResponse:
        r"""Updates an existing calendar on the user's calendar list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/me/calendarList/{calendarId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarListUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarListEntry])
                res.calendar_list_entry = out

        return res

    
    def calendar_calendar_list_watch(self, request: operations.CalendarCalendarListWatchRequest) -> operations.CalendarCalendarListWatchResponse:
        r"""Watch for changes to CalendarList resources.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/calendarList/watch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarListWatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    