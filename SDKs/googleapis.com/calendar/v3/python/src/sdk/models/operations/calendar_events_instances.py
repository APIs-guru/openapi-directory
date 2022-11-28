from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CalendarEventsInstancesPathParams:
    calendar_id: str = field(metadata={'path_param': { 'field_name': 'calendarId', 'style': 'simple', 'explode': False }})
    event_id: str = field(metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CalendarEventsInstancesQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    always_include_email: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'alwaysIncludeEmail', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_attendees: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxAttendees', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    original_start: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'originalStart', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    show_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'showDeleted', 'style': 'form', 'explode': True }})
    time_max: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'timeMax', 'style': 'form', 'explode': True }})
    time_min: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'timeMin', 'style': 'form', 'explode': True }})
    time_zone: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'timeZone', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class CalendarEventsInstancesSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarEventsInstancesSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarEventsInstancesSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarEventsInstancesSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarEventsInstancesSecurity:
    option1: Optional[CalendarEventsInstancesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CalendarEventsInstancesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[CalendarEventsInstancesSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[CalendarEventsInstancesSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CalendarEventsInstancesRequest:
    path_params: CalendarEventsInstancesPathParams = field()
    query_params: CalendarEventsInstancesQueryParams = field()
    security: CalendarEventsInstancesSecurity = field()
    

@dataclass
class CalendarEventsInstancesResponse:
    content_type: str = field()
    status_code: int = field()
    events: Optional[shared.Events] = field(default=None)
    
