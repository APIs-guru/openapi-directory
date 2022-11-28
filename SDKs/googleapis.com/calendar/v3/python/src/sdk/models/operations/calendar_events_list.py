from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CalendarEventsListPathParams:
    calendar_id: str = field(metadata={'path_param': { 'field_name': 'calendarId', 'style': 'simple', 'explode': False }})
    
class CalendarEventsListOrderByEnum(str, Enum):
    START_TIME = "startTime"
    UPDATED = "updated"


@dataclass
class CalendarEventsListQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    always_include_email: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'alwaysIncludeEmail', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    i_cal_uid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iCalUID', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_attendees: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxAttendees', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    order_by: Optional[CalendarEventsListOrderByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'orderBy', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    private_extended_property: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'privateExtendedProperty', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    shared_extended_property: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'sharedExtendedProperty', 'style': 'form', 'explode': True }})
    show_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'showDeleted', 'style': 'form', 'explode': True }})
    show_hidden_invitations: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'showHiddenInvitations', 'style': 'form', 'explode': True }})
    single_events: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'singleEvents', 'style': 'form', 'explode': True }})
    sync_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'syncToken', 'style': 'form', 'explode': True }})
    time_max: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'timeMax', 'style': 'form', 'explode': True }})
    time_min: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'timeMin', 'style': 'form', 'explode': True }})
    time_zone: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'timeZone', 'style': 'form', 'explode': True }})
    updated_min: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'updatedMin', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class CalendarEventsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarEventsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarEventsListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarEventsListSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarEventsListSecurity:
    option1: Optional[CalendarEventsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CalendarEventsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[CalendarEventsListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[CalendarEventsListSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CalendarEventsListRequest:
    path_params: CalendarEventsListPathParams = field()
    query_params: CalendarEventsListQueryParams = field()
    security: CalendarEventsListSecurity = field()
    

@dataclass
class CalendarEventsListResponse:
    content_type: str = field()
    status_code: int = field()
    events: Optional[shared.Events] = field(default=None)
    
