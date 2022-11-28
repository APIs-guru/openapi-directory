from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class CalendarCalendarListWatchMinAccessRoleEnum(str, Enum):
    FREE_BUSY_READER = "freeBusyReader"
    OWNER = "owner"
    READER = "reader"
    WRITER = "writer"


@dataclass
class CalendarCalendarListWatchQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    min_access_role: Optional[CalendarCalendarListWatchMinAccessRoleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'minAccessRole', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    show_deleted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'showDeleted', 'style': 'form', 'explode': True }})
    show_hidden: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'showHidden', 'style': 'form', 'explode': True }})
    sync_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'syncToken', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class CalendarCalendarListWatchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarCalendarListWatchSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarCalendarListWatchSecurity:
    option1: Optional[CalendarCalendarListWatchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CalendarCalendarListWatchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CalendarCalendarListWatchRequest:
    query_params: CalendarCalendarListWatchQueryParams = field()
    security: CalendarCalendarListWatchSecurity = field()
    request: Optional[shared.Channel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CalendarCalendarListWatchResponse:
    content_type: str = field()
    status_code: int = field()
    channel: Optional[shared.Channel] = field(default=None)
    
