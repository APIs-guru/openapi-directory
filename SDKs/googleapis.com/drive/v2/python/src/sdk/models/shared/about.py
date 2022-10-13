from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import user


@dataclass_json
@dataclass
class AboutAdditionalRoleInfoRoleSets:
    additional_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalRoles' }})
    primary_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryRole' }})
    

@dataclass_json
@dataclass
class AboutAdditionalRoleInfo:
    role_sets: Optional[List[AboutAdditionalRoleInfoRoleSets]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleSets' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class AboutDriveThemes:
    background_image_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundImageLink' }})
    color_rgb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorRgb' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class AboutExportFormats:
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    targets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    

@dataclass_json
@dataclass
class AboutFeatures:
    feature_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featureName' }})
    feature_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featureRate' }})
    

@dataclass_json
@dataclass
class AboutImportFormats:
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    targets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    

@dataclass_json
@dataclass
class AboutMaxUploadSizes:
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class AboutQuotaBytesByService:
    bytes_used: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bytesUsed' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    

@dataclass_json
@dataclass
class AboutTeamDriveThemes:
    background_image_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundImageLink' }})
    color_rgb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorRgb' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class About:
    additional_role_info: Optional[List[AboutAdditionalRoleInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalRoleInfo' }})
    can_create_drives: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canCreateDrives' }})
    can_create_team_drives: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canCreateTeamDrives' }})
    domain_sharing_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainSharingPolicy' }})
    drive_themes: Optional[List[AboutDriveThemes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driveThemes' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    export_formats: Optional[List[AboutExportFormats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportFormats' }})
    features: Optional[List[AboutFeatures]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    folder_color_palette: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folderColorPalette' }})
    import_formats: Optional[List[AboutImportFormats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importFormats' }})
    is_current_app_installed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isCurrentAppInstalled' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    largest_change_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'largestChangeId' }})
    max_upload_sizes: Optional[List[AboutMaxUploadSizes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxUploadSizes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    permission_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionId' }})
    quota_bytes_by_service: Optional[List[AboutQuotaBytesByService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaBytesByService' }})
    quota_bytes_total: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaBytesTotal' }})
    quota_bytes_used: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaBytesUsed' }})
    quota_bytes_used_aggregate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaBytesUsedAggregate' }})
    quota_bytes_used_in_trash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaBytesUsedInTrash' }})
    quota_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaType' }})
    remaining_change_ids: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remainingChangeIds' }})
    root_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootFolderId' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    team_drive_themes: Optional[List[AboutTeamDriveThemes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamDriveThemes' }})
    user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
