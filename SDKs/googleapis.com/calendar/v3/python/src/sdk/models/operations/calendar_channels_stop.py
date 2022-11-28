from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CalendarChannelsStopQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class CalendarChannelsStopSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarChannelsStopSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarChannelsStopSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarChannelsStopSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarChannelsStopSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarChannelsStopSecurity:
    option1: Optional[CalendarChannelsStopSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CalendarChannelsStopSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[CalendarChannelsStopSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[CalendarChannelsStopSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[CalendarChannelsStopSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CalendarChannelsStopRequest:
    query_params: CalendarChannelsStopQueryParams = field()
    security: CalendarChannelsStopSecurity = field()
    request: Optional[shared.Channel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CalendarChannelsStopResponse:
    content_type: str = field()
    status_code: int = field()
    
