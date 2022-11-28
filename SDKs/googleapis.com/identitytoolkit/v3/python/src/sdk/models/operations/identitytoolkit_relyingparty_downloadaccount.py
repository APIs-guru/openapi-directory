from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class IdentitytoolkitRelyingpartyDownloadAccountQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class IdentitytoolkitRelyingpartyDownloadAccountSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class IdentitytoolkitRelyingpartyDownloadAccountSecurity:
    option1: Optional[IdentitytoolkitRelyingpartyDownloadAccountSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[IdentitytoolkitRelyingpartyDownloadAccountSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class IdentitytoolkitRelyingpartyDownloadAccountRequest:
    query_params: IdentitytoolkitRelyingpartyDownloadAccountQueryParams = field()
    security: IdentitytoolkitRelyingpartyDownloadAccountSecurity = field()
    request: Optional[shared.IdentitytoolkitRelyingpartyDownloadAccountRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IdentitytoolkitRelyingpartyDownloadAccountResponse:
    content_type: str = field()
    status_code: int = field()
    download_account_response: Optional[shared.DownloadAccountResponse] = field(default=None)
    
