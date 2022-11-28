from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AboutDriveThemes:
    background_image_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundImageLink') }})
    color_rgb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorRgb') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class AboutStorageQuota:
    r"""AboutStorageQuota
    The user's storage quota limits and usage. All fields are measured in bytes.
    """
    
    limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    usage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage') }})
    usage_in_drive: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageInDrive') }})
    usage_in_drive_trash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageInDriveTrash') }})
    

@dataclass_json
@dataclass
class AboutTeamDriveThemes:
    background_image_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundImageLink') }})
    color_rgb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorRgb') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class About:
    r"""About
    Information about the user, the user's Drive, and system capabilities.
    """
    
    app_installed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appInstalled') }})
    can_create_drives: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canCreateDrives') }})
    can_create_team_drives: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canCreateTeamDrives') }})
    drive_themes: Optional[List[AboutDriveThemes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveThemes') }})
    export_formats: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportFormats') }})
    folder_color_palette: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folderColorPalette') }})
    import_formats: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importFormats') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    max_import_sizes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxImportSizes') }})
    max_upload_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxUploadSize') }})
    storage_quota: Optional[AboutStorageQuota] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageQuota') }})
    team_drive_themes: Optional[List[AboutTeamDriveThemes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamDriveThemes') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
