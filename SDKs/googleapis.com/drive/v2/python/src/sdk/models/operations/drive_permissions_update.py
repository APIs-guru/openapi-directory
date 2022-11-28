from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DrivePermissionsUpdatePathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    permission_id: str = field(metadata={'path_param': { 'field_name': 'permissionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DrivePermissionsUpdateQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    remove_expiration: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'removeExpiration', 'style': 'form', 'explode': True }})
    supports_all_drives: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsAllDrives', 'style': 'form', 'explode': True }})
    supports_team_drives: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsTeamDrives', 'style': 'form', 'explode': True }})
    transfer_ownership: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'transferOwnership', 'style': 'form', 'explode': True }})
    use_domain_admin_access: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'useDomainAdminAccess', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class DrivePermissionsUpdateSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePermissionsUpdateSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePermissionsUpdateSecurity:
    option1: Optional[DrivePermissionsUpdateSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DrivePermissionsUpdateSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DrivePermissionsUpdateRequest:
    path_params: DrivePermissionsUpdatePathParams = field()
    query_params: DrivePermissionsUpdateQueryParams = field()
    security: DrivePermissionsUpdateSecurity = field()
    request: Optional[shared.PermissionInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DrivePermissionsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    permission: Optional[shared.Permission] = field(default=None)
    
