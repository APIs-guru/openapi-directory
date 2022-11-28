from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CalendarACLPatchPathParams:
    calendar_id: str = field(metadata={'path_param': { 'field_name': 'calendarId', 'style': 'simple', 'explode': False }})
    rule_id: str = field(metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CalendarACLPatchQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    send_notifications: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sendNotifications', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class CalendarACLPatchSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CalendarACLPatchRequest:
    path_params: CalendarACLPatchPathParams = field()
    query_params: CalendarACLPatchQueryParams = field()
    security: CalendarACLPatchSecurity = field()
    request: Optional[shared.ACLRule] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CalendarACLPatchResponse:
    content_type: str = field()
    status_code: int = field()
    acl_rule: Optional[shared.ACLRule] = field(default=None)
    
