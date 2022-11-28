from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DriveBackgroundImageFile:
    r"""DriveBackgroundImageFile
    An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on drive.drives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    x_coordinate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xCoordinate') }})
    y_coordinate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yCoordinate') }})
    

@dataclass_json
@dataclass
class DriveCapabilities:
    r"""DriveCapabilities
    Capabilities the current user has on this shared drive.
    """
    
    can_add_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canAddChildren') }})
    can_change_copy_requires_writer_permission_restriction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canChangeCopyRequiresWriterPermissionRestriction') }})
    can_change_domain_users_only_restriction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canChangeDomainUsersOnlyRestriction') }})
    can_change_drive_background: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canChangeDriveBackground') }})
    can_change_drive_members_only_restriction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canChangeDriveMembersOnlyRestriction') }})
    can_comment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canComment') }})
    can_copy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canCopy') }})
    can_delete_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canDeleteChildren') }})
    can_delete_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canDeleteDrive') }})
    can_download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canDownload') }})
    can_edit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canEdit') }})
    can_list_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canListChildren') }})
    can_manage_members: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canManageMembers') }})
    can_read_revisions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canReadRevisions') }})
    can_rename: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canRename') }})
    can_rename_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canRenameDrive') }})
    can_reset_drive_restrictions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canResetDriveRestrictions') }})
    can_share: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canShare') }})
    can_trash_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canTrashChildren') }})
    

@dataclass_json
@dataclass
class DriveRestrictions:
    r"""DriveRestrictions
    A set of restrictions that apply to this shared drive or items inside this shared drive.
    """
    
    admin_managed_restrictions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminManagedRestrictions') }})
    copy_requires_writer_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyRequiresWriterPermission') }})
    domain_users_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainUsersOnly') }})
    drive_members_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveMembersOnly') }})
    

@dataclass_json
@dataclass
class Drive:
    r"""Drive
    Representation of a shared drive.
    """
    
    background_image_file: Optional[DriveBackgroundImageFile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundImageFile') }})
    background_image_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundImageLink') }})
    capabilities: Optional[DriveCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    color_rgb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorRgb') }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    org_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgUnitId') }})
    restrictions: Optional[DriveRestrictions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictions') }})
    theme_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('themeId') }})
    
