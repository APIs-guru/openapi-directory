from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DriveDrivesGetPathParams:
    drive_id: str = field(metadata={'path_param': { 'field_name': 'driveId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DriveDrivesGetQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    use_domain_admin_access: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'useDomainAdminAccess', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class DriveDrivesGetSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveDrivesGetSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DriveDrivesGetSecurity:
    option1: Optional[DriveDrivesGetSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DriveDrivesGetSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DriveDrivesGetRequest:
    path_params: DriveDrivesGetPathParams = field()
    query_params: DriveDrivesGetQueryParams = field()
    security: DriveDrivesGetSecurity = field()
    

@dataclass
class DriveDrivesGetResponse:
    content_type: str = field()
    status_code: int = field()
    drive: Optional[shared.Drive] = field(default=None)
    
