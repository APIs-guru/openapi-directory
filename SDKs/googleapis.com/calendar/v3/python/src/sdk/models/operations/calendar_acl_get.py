from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class CalendarACLGetPathParams:
    calendar_id: str = field(default=None, metadata={'path_param': { 'field_name': 'calendarId', 'style': 'simple', 'explode': False }})
    rule_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CalendarACLGetQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class CalendarACLGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarACLGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarACLGetSecurity:
    option1: Optional[CalendarACLGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CalendarACLGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CalendarACLGetRequest:
    path_params: CalendarACLGetPathParams = field(default=None)
    query_params: CalendarACLGetQueryParams = field(default=None)
    security: CalendarACLGetSecurity = field(default=None)
    

@dataclass
class CalendarACLGetResponse:
    acl_rule: Optional[shared.ACLRule] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
