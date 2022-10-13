from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PermissionPermissionDetails:
    additional_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalRoles' }})
    inherited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inherited' }})
    inherited_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inheritedFrom' }})
    permission_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionType' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    

@dataclass_json
@dataclass
class PermissionTeamDrivePermissionDetails:
    additional_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalRoles' }})
    inherited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inherited' }})
    inherited_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inheritedFrom' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    team_drive_permission_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamDrivePermissionType' }})
    

@dataclass_json
@dataclass
class Permission:
    additional_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalRoles' }})
    auth_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authKey' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pending_owner: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingOwner' }})
    permission_details: Optional[List[PermissionPermissionDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionDetails' }})
    photo_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photoLink' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    team_drive_permission_details: Optional[List[PermissionTeamDrivePermissionDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamDrivePermissionDetails' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    view: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    with_link: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'withLink' }})
    
