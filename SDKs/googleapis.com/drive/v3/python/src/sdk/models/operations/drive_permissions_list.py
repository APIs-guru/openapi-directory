from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DrivePermissionsListPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DrivePermissionsListQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    include_permissions_for_view: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'includePermissionsForView', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    supports_all_drives: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsAllDrives', 'style': 'form', 'explode': True }})
    supports_team_drives: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsTeamDrives', 'style': 'form', 'explode': True }})
    use_domain_admin_access: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'useDomainAdminAccess', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class DrivePermissionsListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePermissionsListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePermissionsListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePermissionsListSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePermissionsListSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePermissionsListSecurityOption6:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePermissionsListSecurity:
    option1: Optional[DrivePermissionsListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DrivePermissionsListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DrivePermissionsListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DrivePermissionsListSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[DrivePermissionsListSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    option6: Optional[DrivePermissionsListSecurityOption6] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DrivePermissionsListRequest:
    path_params: DrivePermissionsListPathParams = field()
    query_params: DrivePermissionsListQueryParams = field()
    security: DrivePermissionsListSecurity = field()
    

@dataclass
class DrivePermissionsListResponse:
    content_type: str = field()
    status_code: int = field()
    permission_list: Optional[shared.PermissionList] = field(default=None)
    
