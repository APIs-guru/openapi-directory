from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contentrestriction
from . import label
from . import user
from . import user
from . import permission
from . import user
from . import user


@dataclass_json
@dataclass
class FileCapabilities:
    can_accept_ownership: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canAcceptOwnership' }})
    can_add_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canAddChildren' }})
    can_add_folder_from_another_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canAddFolderFromAnotherDrive' }})
    can_add_my_drive_parent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canAddMyDriveParent' }})
    can_change_copy_requires_writer_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canChangeCopyRequiresWriterPermission' }})
    can_change_security_update_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canChangeSecurityUpdateEnabled' }})
    can_change_viewers_can_copy_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canChangeViewersCanCopyContent' }})
    can_comment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canComment' }})
    can_copy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canCopy' }})
    can_delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canDelete' }})
    can_delete_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canDeleteChildren' }})
    can_download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canDownload' }})
    can_edit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canEdit' }})
    can_list_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canListChildren' }})
    can_modify_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canModifyContent' }})
    can_modify_content_restriction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canModifyContentRestriction' }})
    can_modify_labels: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canModifyLabels' }})
    can_move_children_out_of_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canMoveChildrenOutOfDrive' }})
    can_move_children_out_of_team_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canMoveChildrenOutOfTeamDrive' }})
    can_move_children_within_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canMoveChildrenWithinDrive' }})
    can_move_children_within_team_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canMoveChildrenWithinTeamDrive' }})
    can_move_item_into_team_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canMoveItemIntoTeamDrive' }})
    can_move_item_out_of_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canMoveItemOutOfDrive' }})
    can_move_item_out_of_team_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canMoveItemOutOfTeamDrive' }})
    can_move_item_within_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canMoveItemWithinDrive' }})
    can_move_item_within_team_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canMoveItemWithinTeamDrive' }})
    can_move_team_drive_item: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canMoveTeamDriveItem' }})
    can_read_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canReadDrive' }})
    can_read_labels: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canReadLabels' }})
    can_read_revisions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canReadRevisions' }})
    can_read_team_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canReadTeamDrive' }})
    can_remove_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canRemoveChildren' }})
    can_remove_my_drive_parent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canRemoveMyDriveParent' }})
    can_rename: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canRename' }})
    can_share: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canShare' }})
    can_trash: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canTrash' }})
    can_trash_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canTrashChildren' }})
    can_untrash: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canUntrash' }})
    

@dataclass_json
@dataclass
class FileContentHintsThumbnail:
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    

@dataclass_json
@dataclass
class FileContentHints:
    indexable_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexableText' }})
    thumbnail: Optional[FileContentHintsThumbnail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnail' }})
    

@dataclass_json
@dataclass
class FileImageMediaMetadataLocation:
    altitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'altitude' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    

@dataclass_json
@dataclass
class FileImageMediaMetadata:
    aperture: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aperture' }})
    camera_make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cameraMake' }})
    camera_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cameraModel' }})
    color_space: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorSpace' }})
    exposure_bias: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exposureBias' }})
    exposure_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exposureMode' }})
    exposure_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exposureTime' }})
    flash_used: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flashUsed' }})
    focal_length: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'focalLength' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    iso_speed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isoSpeed' }})
    lens: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lens' }})
    location: Optional[FileImageMediaMetadataLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    max_aperture_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxApertureValue' }})
    metering_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meteringMode' }})
    rotation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rotation' }})
    sensor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sensor' }})
    subject_distance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subjectDistance' }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    white_balance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'whiteBalance' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    

@dataclass_json
@dataclass
class FileLabelInfo:
    labels: Optional[List[label.Label]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    

@dataclass_json
@dataclass
class FileLinkShareMetadata:
    security_update_eligible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityUpdateEligible' }})
    security_update_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityUpdateEnabled' }})
    

@dataclass_json
@dataclass
class FileShortcutDetails:
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetId' }})
    target_mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetMimeType' }})
    target_resource_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetResourceKey' }})
    

@dataclass_json
@dataclass
class FileVideoMediaMetadata:
    duration_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationMillis' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    

@dataclass_json
@dataclass
class File:
    app_properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appProperties' }})
    capabilities: Optional[FileCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    content_hints: Optional[FileContentHints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentHints' }})
    content_restrictions: Optional[List[contentrestriction.ContentRestriction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentRestrictions' }})
    copy_requires_writer_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyRequiresWriterPermission' }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    drive_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driveId' }})
    explicitly_trashed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explicitlyTrashed' }})
    export_links: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exportLinks' }})
    file_extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileExtension' }})
    folder_color_rgb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folderColorRgb' }})
    full_file_extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullFileExtension' }})
    has_augmented_permissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasAugmentedPermissions' }})
    has_thumbnail: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasThumbnail' }})
    head_revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headRevisionId' }})
    icon_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconLink' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image_media_metadata: Optional[FileImageMediaMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageMediaMetadata' }})
    is_app_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isAppAuthorized' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    label_info: Optional[FileLabelInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelInfo' }})
    last_modifying_user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifyingUser' }})
    link_share_metadata: Optional[FileLinkShareMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkShareMetadata' }})
    md5_checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'md5Checksum' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    modified_by_me: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedByMe' }})
    modified_by_me_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedByMeTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    original_filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalFilename' }})
    owned_by_me: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownedByMe' }})
    owners: Optional[List[user.User]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owners' }})
    parents: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parents' }})
    permission_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionIds' }})
    permissions: Optional[List[permission.Permission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    quota_bytes_used: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quotaBytesUsed' }})
    resource_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceKey' }})
    sha1_checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha1Checksum' }})
    sha256_checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sha256Checksum' }})
    shared: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shared' }})
    shared_with_me_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedWithMeTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sharing_user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharingUser' }})
    shortcut_details: Optional[FileShortcutDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortcutDetails' }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    spaces: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spaces' }})
    starred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starred' }})
    team_drive_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamDriveId' }})
    thumbnail_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailLink' }})
    thumbnail_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnailVersion' }})
    trashed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trashed' }})
    trashed_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trashedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trashing_user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trashingUser' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    video_media_metadata: Optional[FileVideoMediaMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoMediaMetadata' }})
    viewed_by_me: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewedByMe' }})
    viewed_by_me_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewedByMeTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    viewers_can_copy_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewersCanCopyContent' }})
    web_content_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webContentLink' }})
    web_view_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webViewLink' }})
    writers_can_share: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writersCanShare' }})
    
