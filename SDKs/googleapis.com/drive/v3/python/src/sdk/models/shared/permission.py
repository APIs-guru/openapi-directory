from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PermissionPermissionDetails:
    inherited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inherited') }})
    inherited_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritedFrom') }})
    permission_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionType') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    

@dataclass_json
@dataclass
class PermissionTeamDrivePermissionDetails:
    inherited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inherited') }})
    inherited_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritedFrom') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    team_drive_permission_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamDrivePermissionType') }})
    

@dataclass_json
@dataclass
class PermissionInput:
    r"""PermissionInput
    A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.
    """
    
    allow_file_discovery: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowFileDiscovery') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    expiration_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    pending_owner: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingOwner') }})
    photo_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photoLink') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    view: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    

@dataclass_json
@dataclass
class Permission:
    r"""Permission
    A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.
    """
    
    allow_file_discovery: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowFileDiscovery') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    expiration_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    pending_owner: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingOwner') }})
    permission_details: Optional[List[PermissionPermissionDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionDetails') }})
    photo_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photoLink') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    team_drive_permission_details: Optional[List[PermissionTeamDrivePermissionDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamDrivePermissionDetails') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    view: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    
