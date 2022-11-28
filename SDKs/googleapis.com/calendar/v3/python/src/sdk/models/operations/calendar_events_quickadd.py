from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CalendarEventsQuickAddPathParams:
    calendar_id: str = field(metadata={'path_param': { 'field_name': 'calendarId', 'style': 'simple', 'explode': False }})
    
class CalendarEventsQuickAddSendUpdatesEnum(str, Enum):
    ALL = "all"
    EXTERNAL_ONLY = "externalOnly"
    NONE = "none"


@dataclass
class CalendarEventsQuickAddQueryParams:
    text: str = field(metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    send_notifications: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sendNotifications', 'style': 'form', 'explode': True }})
    send_updates: Optional[CalendarEventsQuickAddSendUpdatesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sendUpdates', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class CalendarEventsQuickAddSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarEventsQuickAddSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarEventsQuickAddSecurity:
    option1: Optional[CalendarEventsQuickAddSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CalendarEventsQuickAddSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CalendarEventsQuickAddRequest:
    path_params: CalendarEventsQuickAddPathParams = field()
    query_params: CalendarEventsQuickAddQueryParams = field()
    security: CalendarEventsQuickAddSecurity = field()
    

@dataclass
class CalendarEventsQuickAddResponse:
    content_type: str = field()
    status_code: int = field()
    event: Optional[shared.Event] = field(default=None)
    
