from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TeamDriveBackgroundImageFile:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    x_coordinate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xCoordinate' }})
    y_coordinate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yCoordinate' }})
    

@dataclass_json
@dataclass
class TeamDriveCapabilities:
    can_add_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canAddChildren' }})
    can_change_copy_requires_writer_permission_restriction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canChangeCopyRequiresWriterPermissionRestriction' }})
    can_change_domain_users_only_restriction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canChangeDomainUsersOnlyRestriction' }})
    can_change_team_drive_background: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canChangeTeamDriveBackground' }})
    can_change_team_members_only_restriction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canChangeTeamMembersOnlyRestriction' }})
    can_comment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canComment' }})
    can_copy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canCopy' }})
    can_delete_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canDeleteChildren' }})
    can_delete_team_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canDeleteTeamDrive' }})
    can_download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canDownload' }})
    can_edit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canEdit' }})
    can_list_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canListChildren' }})
    can_manage_members: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canManageMembers' }})
    can_read_revisions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canReadRevisions' }})
    can_remove_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canRemoveChildren' }})
    can_rename: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canRename' }})
    can_rename_team_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canRenameTeamDrive' }})
    can_reset_team_drive_restrictions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canResetTeamDriveRestrictions' }})
    can_share: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canShare' }})
    can_trash_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canTrashChildren' }})
    

@dataclass_json
@dataclass
class TeamDriveRestrictions:
    admin_managed_restrictions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminManagedRestrictions' }})
    copy_requires_writer_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyRequiresWriterPermission' }})
    domain_users_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainUsersOnly' }})
    team_members_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamMembersOnly' }})
    

@dataclass_json
@dataclass
class TeamDrive:
    background_image_file: Optional[TeamDriveBackgroundImageFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundImageFile' }})
    background_image_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundImageLink' }})
    capabilities: Optional[TeamDriveCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    color_rgb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorRgb' }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    org_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgUnitId' }})
    restrictions: Optional[TeamDriveRestrictions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restrictions' }})
    theme_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'themeId' }})
    
