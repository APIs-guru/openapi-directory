from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class IdentitytoolkitRelyingpartyGetAccountInfoQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class IdentitytoolkitRelyingpartyGetAccountInfoSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class IdentitytoolkitRelyingpartyGetAccountInfoRequest:
    query_params: IdentitytoolkitRelyingpartyGetAccountInfoQueryParams = field()
    security: IdentitytoolkitRelyingpartyGetAccountInfoSecurity = field()
    request: Optional[shared.IdentitytoolkitRelyingpartyGetAccountInfoRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IdentitytoolkitRelyingpartyGetAccountInfoResponse:
    content_type: str = field()
    status_code: int = field()
    get_account_info_response: Optional[shared.GetAccountInfoResponse] = field(default=None)
    
