import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://www.googleapis.com/calendar/v3",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def calendar_acl_delete(self, request: operations.CalendarACLDeleteRequest) -> operations.CalendarACLDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}/acl/{ruleId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarACLDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def calendar_acl_get(self, request: operations.CalendarACLGetRequest) -> operations.CalendarACLGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}/acl/{ruleId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarACLGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ACLRule])
                res.acl_rule = out

        return res

    
    def calendar_acl_insert(self, request: operations.CalendarACLInsertRequest) -> operations.CalendarACLInsertResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}/acl", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarACLInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ACLRule])
                res.acl_rule = out

        return res

    
    def calendar_acl_list(self, request: operations.CalendarACLListRequest) -> operations.CalendarACLListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}/acl", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarACLListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ACL])
                res.acl = out

        return res

    
    def calendar_acl_patch(self, request: operations.CalendarACLPatchRequest) -> operations.CalendarACLPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}/acl/{ruleId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarACLPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ACLRule])
                res.acl_rule = out

        return res

    
    def calendar_acl_update(self, request: operations.CalendarACLUpdateRequest) -> operations.CalendarACLUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}/acl/{ruleId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarACLUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ACLRule])
                res.acl_rule = out

        return res

    
    def calendar_acl_watch(self, request: operations.CalendarACLWatchRequest) -> operations.CalendarACLWatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}/acl/watch", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarACLWatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    
    def calendar_calendar_list_delete(self, request: operations.CalendarCalendarListDeleteRequest) -> operations.CalendarCalendarListDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/users/me/calendarList/{calendarId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarListDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def calendar_calendar_list_get(self, request: operations.CalendarCalendarListGetRequest) -> operations.CalendarCalendarListGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/users/me/calendarList/{calendarId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarListGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarListEntry])
                res.calendar_list_entry = out

        return res

    
    def calendar_calendar_list_insert(self, request: operations.CalendarCalendarListInsertRequest) -> operations.CalendarCalendarListInsertResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/users/me/calendarList"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarListInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarListEntry])
                res.calendar_list_entry = out

        return res

    
    def calendar_calendar_list_list(self, request: operations.CalendarCalendarListListRequest) -> operations.CalendarCalendarListListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/users/me/calendarList"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarListListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarList])
                res.calendar_list = out

        return res

    
    def calendar_calendar_list_patch(self, request: operations.CalendarCalendarListPatchRequest) -> operations.CalendarCalendarListPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/users/me/calendarList/{calendarId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarListPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarListEntry])
                res.calendar_list_entry = out

        return res

    
    def calendar_calendar_list_update(self, request: operations.CalendarCalendarListUpdateRequest) -> operations.CalendarCalendarListUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/users/me/calendarList/{calendarId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarListUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CalendarListEntry])
                res.calendar_list_entry = out

        return res

    
    def calendar_calendar_list_watch(self, request: operations.CalendarCalendarListWatchRequest) -> operations.CalendarCalendarListWatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/users/me/calendarList/watch"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarListWatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    
    def calendar_calendars_clear(self, request: operations.CalendarCalendarsClearRequest) -> operations.CalendarCalendarsClearResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}/clear", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarsClearResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def calendar_calendars_delete(self, request: operations.CalendarCalendarsDeleteRequest) -> operations.CalendarCalendarsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def calendar_calendars_get(self, request: operations.CalendarCalendarsGetRequest) -> operations.CalendarCalendarsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Calendar])
                res.calendar = out

        return res

    
    def calendar_calendars_insert(self, request: operations.CalendarCalendarsInsertRequest) -> operations.CalendarCalendarsInsertResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/calendars"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Calendar])
                res.calendar = out

        return res

    
    def calendar_calendars_patch(self, request: operations.CalendarCalendarsPatchRequest) -> operations.CalendarCalendarsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Calendar])
                res.calendar = out

        return res

    
    def calendar_calendars_update(self, request: operations.CalendarCalendarsUpdateRequest) -> operations.CalendarCalendarsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarCalendarsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Calendar])
                res.calendar = out

        return res

    
    def calendar_channels_stop(self, request: operations.CalendarChannelsStopRequest) -> operations.CalendarChannelsStopResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/channels/stop"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarChannelsStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def calendar_colors_get(self, request: operations.CalendarColorsGetRequest) -> operations.CalendarColorsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/colors"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarColorsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Colors])
                res.colors = out

        return res

    
    def calendar_events_delete(self, request: operations.CalendarEventsDeleteRequest) -> operations.CalendarEventsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events/{eventId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def calendar_events_get(self, request: operations.CalendarEventsGetRequest) -> operations.CalendarEventsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events/{eventId}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Event])
                res.event = out

        return res

    
    def calendar_events_import(self, request: operations.CalendarEventsImportRequest) -> operations.CalendarEventsImportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events/import", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Event])
                res.event = out

        return res

    
    def calendar_events_insert(self, request: operations.CalendarEventsInsertRequest) -> operations.CalendarEventsInsertResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Event])
                res.event = out

        return res

    
    def calendar_events_instances(self, request: operations.CalendarEventsInstancesRequest) -> operations.CalendarEventsInstancesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events/{eventId}/instances", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsInstancesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Events])
                res.events = out

        return res

    
    def calendar_events_list(self, request: operations.CalendarEventsListRequest) -> operations.CalendarEventsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Events])
                res.events = out

        return res

    
    def calendar_events_move(self, request: operations.CalendarEventsMoveRequest) -> operations.CalendarEventsMoveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events/{eventId}/move", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsMoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Event])
                res.event = out

        return res

    
    def calendar_events_patch(self, request: operations.CalendarEventsPatchRequest) -> operations.CalendarEventsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events/{eventId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Event])
                res.event = out

        return res

    
    def calendar_events_quick_add(self, request: operations.CalendarEventsQuickAddRequest) -> operations.CalendarEventsQuickAddResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events/quickAdd", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsQuickAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Event])
                res.event = out

        return res

    
    def calendar_events_update(self, request: operations.CalendarEventsUpdateRequest) -> operations.CalendarEventsUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events/{eventId}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Event])
                res.event = out

        return res

    
    def calendar_events_watch(self, request: operations.CalendarEventsWatchRequest) -> operations.CalendarEventsWatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/calendars/{calendarId}/events/watch", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarEventsWatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    
    def calendar_freebusy_query(self, request: operations.CalendarFreebusyQueryRequest) -> operations.CalendarFreebusyQueryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/freeBusy"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarFreebusyQueryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FreeBusyResponse])
                res.free_busy_response = out

        return res

    
    def calendar_settings_get(self, request: operations.CalendarSettingsGetRequest) -> operations.CalendarSettingsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/users/me/settings/{setting}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarSettingsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Setting])
                res.setting = out

        return res

    
    def calendar_settings_list(self, request: operations.CalendarSettingsListRequest) -> operations.CalendarSettingsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/users/me/settings"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarSettingsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Settings])
                res.settings = out

        return res

    
    def calendar_settings_watch(self, request: operations.CalendarSettingsWatchRequest) -> operations.CalendarSettingsWatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/users/me/settings/watch"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarSettingsWatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    