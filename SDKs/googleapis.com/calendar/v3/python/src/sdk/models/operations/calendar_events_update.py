from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CalendarEventsUpdatePathParams:
    calendar_id: str = field(metadata={'path_param': { 'field_name': 'calendarId', 'style': 'simple', 'explode': False }})
    event_id: str = field(metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    
class CalendarEventsUpdateSendUpdatesEnum(str, Enum):
    ALL = "all"
    EXTERNAL_ONLY = "externalOnly"
    NONE = "none"


@dataclass
class CalendarEventsUpdateQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    always_include_email: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'alwaysIncludeEmail', 'style': 'form', 'explode': True }})
    conference_data_version: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'conferenceDataVersion', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    max_attendees: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxAttendees', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    send_notifications: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sendNotifications', 'style': 'form', 'explode': True }})
    send_updates: Optional[CalendarEventsUpdateSendUpdatesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sendUpdates', 'style': 'form', 'explode': True }})
    supports_attachments: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsAttachments', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class CalendarEventsUpdateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarEventsUpdateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarEventsUpdateSecurity:
    option1: Optional[CalendarEventsUpdateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CalendarEventsUpdateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CalendarEventsUpdateRequest:
    path_params: CalendarEventsUpdatePathParams = field()
    query_params: CalendarEventsUpdateQueryParams = field()
    security: CalendarEventsUpdateSecurity = field()
    request: Optional[shared.Event] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CalendarEventsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    event: Optional[shared.Event] = field(default=None)
    
