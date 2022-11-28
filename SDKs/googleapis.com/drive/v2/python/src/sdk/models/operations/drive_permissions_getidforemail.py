from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DrivePermissionsGetIDForEmailPathParams:
    email: str = field(metadata={'path_param': { 'field_name': 'email', 'style': 'simple', 'explode': False }})
    

@dataclass
class DrivePermissionsGetIDForEmailQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class DrivePermissionsGetIDForEmailSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePermissionsGetIDForEmailSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePermissionsGetIDForEmailSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePermissionsGetIDForEmailSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePermissionsGetIDForEmailSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePermissionsGetIDForEmailSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePermissionsGetIDForEmailSecurityOption7:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePermissionsGetIDForEmailSecurityOption8:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePermissionsGetIDForEmailSecurity:
    option1: Optional[DrivePermissionsGetIDForEmailSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DrivePermissionsGetIDForEmailSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DrivePermissionsGetIDForEmailSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DrivePermissionsGetIDForEmailSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[DrivePermissionsGetIDForEmailSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[DrivePermissionsGetIDForEmailSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    option7: Optional[DrivePermissionsGetIDForEmailSecurityOption7] = field(default=None, metadata={'security': { 'option': True }})
    option8: Optional[DrivePermissionsGetIDForEmailSecurityOption8] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DrivePermissionsGetIDForEmailRequest:
    path_params: DrivePermissionsGetIDForEmailPathParams = field()
    query_params: DrivePermissionsGetIDForEmailQueryParams = field()
    security: DrivePermissionsGetIDForEmailSecurity = field()
    

@dataclass
class DrivePermissionsGetIDForEmailResponse:
    content_type: str = field()
    status_code: int = field()
    permission_id: Optional[shared.PermissionID] = field(default=None)
    
