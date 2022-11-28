from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CalendarEventsImportPathParams:
    calendar_id: str = field(metadata={'path_param': { 'field_name': 'calendarId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CalendarEventsImportQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    conference_data_version: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'conferenceDataVersion', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    supports_attachments: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsAttachments', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class CalendarEventsImportSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarEventsImportSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarEventsImportSecurity:
    option1: Optional[CalendarEventsImportSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CalendarEventsImportSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CalendarEventsImportRequest:
    path_params: CalendarEventsImportPathParams = field()
    query_params: CalendarEventsImportQueryParams = field()
    security: CalendarEventsImportSecurity = field()
    request: Optional[shared.Event] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CalendarEventsImportResponse:
    content_type: str = field()
    status_code: int = field()
    event: Optional[shared.Event] = field(default=None)
    
