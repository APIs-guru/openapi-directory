from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class Oauth2UserinfoV2MeGetQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class Oauth2UserinfoV2MeGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Oauth2UserinfoV2MeGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Oauth2UserinfoV2MeGetSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class Oauth2UserinfoV2MeGetSecurity:
    option1: Optional[Oauth2UserinfoV2MeGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[Oauth2UserinfoV2MeGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[Oauth2UserinfoV2MeGetSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class Oauth2UserinfoV2MeGetRequest:
    query_params: Oauth2UserinfoV2MeGetQueryParams = field()
    security: Oauth2UserinfoV2MeGetSecurity = field()
    

@dataclass
class Oauth2UserinfoV2MeGetResponse:
    content_type: str = field()
    status_code: int = field()
    userinfo: Optional[shared.Userinfo] = field(default=None)
    
