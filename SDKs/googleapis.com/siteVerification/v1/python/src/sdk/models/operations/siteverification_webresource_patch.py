from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class SiteVerificationWebResourcePatchPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SiteVerificationWebResourcePatchQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class SiteVerificationWebResourcePatchSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SiteVerificationWebResourcePatchRequest:
    path_params: SiteVerificationWebResourcePatchPathParams = field()
    query_params: SiteVerificationWebResourcePatchQueryParams = field()
    security: SiteVerificationWebResourcePatchSecurity = field()
    request: Optional[shared.SiteVerificationWebResourceResource] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SiteVerificationWebResourcePatchResponse:
    content_type: str = field()
    status_code: int = field()
    site_verification_web_resource_resource: Optional[shared.SiteVerificationWebResourceResource] = field(default=None)
    
