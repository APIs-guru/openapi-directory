from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DrivePermissionsInsertPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DrivePermissionsInsertQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    email_message: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'emailMessage', 'style': 'form', 'explode': True }})
    enforce_single_parent: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enforceSingleParent', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    move_to_new_owners_root: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'moveToNewOwnersRoot', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    send_notification_emails: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sendNotificationEmails', 'style': 'form', 'explode': True }})
    supports_all_drives: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsAllDrives', 'style': 'form', 'explode': True }})
    supports_team_drives: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'supportsTeamDrives', 'style': 'form', 'explode': True }})
    use_domain_admin_access: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'useDomainAdminAccess', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class DrivePermissionsInsertSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePermissionsInsertSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DrivePermissionsInsertSecurity:
    option1: Optional[DrivePermissionsInsertSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DrivePermissionsInsertSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DrivePermissionsInsertRequest:
    path_params: DrivePermissionsInsertPathParams = field()
    query_params: DrivePermissionsInsertQueryParams = field()
    security: DrivePermissionsInsertSecurity = field()
    request: Optional[shared.PermissionInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DrivePermissionsInsertResponse:
    content_type: str = field()
    status_code: int = field()
    permission: Optional[shared.Permission] = field(default=None)
    
