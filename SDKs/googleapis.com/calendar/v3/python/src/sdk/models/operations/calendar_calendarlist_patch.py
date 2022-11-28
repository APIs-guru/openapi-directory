from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CalendarCalendarListPatchPathParams:
    calendar_id: str = field(metadata={'path_param': { 'field_name': 'calendarId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CalendarCalendarListPatchQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    color_rgb_format: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'colorRgbFormat', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class CalendarCalendarListPatchSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarCalendarListPatchRequest:
    path_params: CalendarCalendarListPatchPathParams = field()
    query_params: CalendarCalendarListPatchQueryParams = field()
    security: CalendarCalendarListPatchSecurity = field()
    request: Optional[shared.CalendarListEntry] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CalendarCalendarListPatchResponse:
    content_type: str = field()
    status_code: int = field()
    calendar_list_entry: Optional[shared.CalendarListEntry] = field(default=None)
    
