from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class CalendarSettingsGetPathParams:
    setting: str = field(default=None, metadata={'path_param': { 'field_name': 'setting', 'style': 'simple', 'explode': False }})
    

@dataclass
class CalendarSettingsGetQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class CalendarSettingsGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarSettingsGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarSettingsGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarSettingsGetSecurity:
    option1: Optional[CalendarSettingsGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CalendarSettingsGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[CalendarSettingsGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CalendarSettingsGetRequest:
    path_params: CalendarSettingsGetPathParams = field(default=None)
    query_params: CalendarSettingsGetQueryParams = field(default=None)
    security: CalendarSettingsGetSecurity = field(default=None)
    

@dataclass
class CalendarSettingsGetResponse:
    content_type: str = field(default=None)
    setting: Optional[shared.Setting] = field(default=None)
    status_code: int = field(default=None)
    
