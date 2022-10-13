from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class CalendarCalendarsGetPathParams:
    calendar_id: str = field(default=None, metadata={'path_param': { 'field_name': 'calendarId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CalendarCalendarsGetQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class CalendarCalendarsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarCalendarsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarCalendarsGetSecurity:
    option1: Optional[CalendarCalendarsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CalendarCalendarsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CalendarCalendarsGetRequest:
    path_params: CalendarCalendarsGetPathParams = field(default=None)
    query_params: CalendarCalendarsGetQueryParams = field(default=None)
    security: CalendarCalendarsGetSecurity = field(default=None)
    

@dataclass
class CalendarCalendarsGetResponse:
    calendar: Optional[shared.Calendar] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
