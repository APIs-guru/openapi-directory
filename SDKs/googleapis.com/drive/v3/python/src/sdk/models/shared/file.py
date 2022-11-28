from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FileCapabilities:
    r"""FileCapabilities
    Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
    """
    
    can_accept_ownership: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canAcceptOwnership') }})
    can_add_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canAddChildren') }})
    can_add_folder_from_another_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canAddFolderFromAnotherDrive') }})
    can_add_my_drive_parent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canAddMyDriveParent') }})
    can_change_copy_requires_writer_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canChangeCopyRequiresWriterPermission') }})
    can_change_security_update_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canChangeSecurityUpdateEnabled') }})
    can_change_viewers_can_copy_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canChangeViewersCanCopyContent') }})
    can_comment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canComment') }})
    can_copy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canCopy') }})
    can_delete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canDelete') }})
    can_delete_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canDeleteChildren') }})
    can_download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canDownload') }})
    can_edit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canEdit') }})
    can_list_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canListChildren') }})
    can_modify_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canModifyContent') }})
    can_modify_content_restriction: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canModifyContentRestriction') }})
    can_modify_labels: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canModifyLabels') }})
    can_move_children_out_of_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canMoveChildrenOutOfDrive') }})
    can_move_children_out_of_team_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canMoveChildrenOutOfTeamDrive') }})
    can_move_children_within_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canMoveChildrenWithinDrive') }})
    can_move_children_within_team_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canMoveChildrenWithinTeamDrive') }})
    can_move_item_into_team_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canMoveItemIntoTeamDrive') }})
    can_move_item_out_of_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canMoveItemOutOfDrive') }})
    can_move_item_out_of_team_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canMoveItemOutOfTeamDrive') }})
    can_move_item_within_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canMoveItemWithinDrive') }})
    can_move_item_within_team_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canMoveItemWithinTeamDrive') }})
    can_move_team_drive_item: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canMoveTeamDriveItem') }})
    can_read_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canReadDrive') }})
    can_read_labels: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canReadLabels') }})
    can_read_revisions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canReadRevisions') }})
    can_read_team_drive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canReadTeamDrive') }})
    can_remove_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canRemoveChildren') }})
    can_remove_my_drive_parent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canRemoveMyDriveParent') }})
    can_rename: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canRename') }})
    can_share: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canShare') }})
    can_trash: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canTrash') }})
    can_trash_children: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canTrashChildren') }})
    can_untrash: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canUntrash') }})
    

@dataclass_json
@dataclass
class FileContentHintsThumbnail:
    r"""FileContentHintsThumbnail
    A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail.
    """
    
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    

@dataclass_json
@dataclass
class FileContentHints:
    r"""FileContentHints
    Additional information about the content of the file. These fields are never populated in responses.
    """
    
    indexable_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indexableText') }})
    thumbnail: Optional[FileContentHintsThumbnail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    

@dataclass_json
@dataclass
class FileImageMediaMetadataLocation:
    r"""FileImageMediaMetadataLocation
    Geographic location information stored in the image.
    """
    
    altitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altitude') }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    

@dataclass_json
@dataclass
class FileImageMediaMetadata:
    r"""FileImageMediaMetadata
    Additional metadata about image media, if available.
    """
    
    aperture: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aperture') }})
    camera_make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cameraMake') }})
    camera_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cameraModel') }})
    color_space: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorSpace') }})
    exposure_bias: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exposureBias') }})
    exposure_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exposureMode') }})
    exposure_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exposureTime') }})
    flash_used: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flashUsed') }})
    focal_length: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('focalLength') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    iso_speed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isoSpeed') }})
    lens: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lens') }})
    location: Optional[FileImageMediaMetadataLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    max_aperture_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxApertureValue') }})
    metering_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meteringMode') }})
    rotation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rotation') }})
    sensor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensor') }})
    subject_distance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectDistance') }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    white_balance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('whiteBalance') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclass
class FileLabelInfo:
    r"""FileLabelInfo
    An overview of the labels on the file.
    """
    
    labels: Optional[List[Label]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    

@dataclass_json
@dataclass
class FileLinkShareMetadata:
    r"""FileLinkShareMetadata
    Contains details about the link URLs that clients are using to refer to this item.
    """
    
    security_update_eligible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityUpdateEligible') }})
    security_update_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityUpdateEnabled') }})
    

@dataclass_json
@dataclass
class FileShortcutDetails:
    r"""FileShortcutDetails
    Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.
    """
    
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetId') }})
    target_mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetMimeType') }})
    target_resource_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetResourceKey') }})
    

@dataclass_json
@dataclass
class FileVideoMediaMetadata:
    r"""FileVideoMediaMetadata
    Additional metadata about video media. This may not be available immediately upon upload.
    """
    
    duration_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationMillis') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    

@dataclass_json
@dataclass
class FileInput:
    r"""FileInput
    The metadata for a file.
    """
    
    app_properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appProperties') }})
    capabilities: Optional[FileCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    content_hints: Optional[FileContentHints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentHints') }})
    content_restrictions: Optional[List[ContentRestriction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentRestrictions') }})
    copy_requires_writer_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyRequiresWriterPermission') }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    drive_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveId') }})
    explicitly_trashed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicitlyTrashed') }})
    file_extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileExtension') }})
    folder_color_rgb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folderColorRgb') }})
    full_file_extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullFileExtension') }})
    has_augmented_permissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasAugmentedPermissions') }})
    has_thumbnail: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasThumbnail') }})
    head_revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headRevisionId') }})
    icon_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconLink') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_media_metadata: Optional[FileImageMediaMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageMediaMetadata') }})
    is_app_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAppAuthorized') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    label_info: Optional[FileLabelInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelInfo') }})
    last_modifying_user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifyingUser') }})
    link_share_metadata: Optional[FileLinkShareMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkShareMetadata') }})
    md5_checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5Checksum') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    modified_by_me: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedByMe') }})
    modified_by_me_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedByMeTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    original_filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalFilename') }})
    owned_by_me: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownedByMe') }})
    owners: Optional[List[User]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owners') }})
    parents: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parents') }})
    permission_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionIds') }})
    permissions: Optional[List[PermissionInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    quota_bytes_used: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaBytesUsed') }})
    resource_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceKey') }})
    sha1_checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha1Checksum') }})
    sha256_checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha256Checksum') }})
    shared: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared') }})
    shared_with_me_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedWithMeTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sharing_user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharingUser') }})
    shortcut_details: Optional[FileShortcutDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortcutDetails') }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    spaces: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spaces') }})
    starred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred') }})
    team_drive_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamDriveId') }})
    thumbnail_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailLink') }})
    thumbnail_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailVersion') }})
    trashed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trashed') }})
    trashed_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trashedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trashing_user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trashingUser') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    video_media_metadata: Optional[FileVideoMediaMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoMediaMetadata') }})
    viewed_by_me: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewedByMe') }})
    viewed_by_me_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewedByMeTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    viewers_can_copy_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewersCanCopyContent') }})
    web_content_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webContentLink') }})
    web_view_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webViewLink') }})
    writers_can_share: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writersCanShare') }})
    

@dataclass_json
@dataclass
class File:
    r"""File
    The metadata for a file.
    """
    
    app_properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appProperties') }})
    capabilities: Optional[FileCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    content_hints: Optional[FileContentHints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentHints') }})
    content_restrictions: Optional[List[ContentRestriction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentRestrictions') }})
    copy_requires_writer_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyRequiresWriterPermission') }})
    created_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    drive_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveId') }})
    explicitly_trashed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicitlyTrashed') }})
    export_links: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportLinks') }})
    file_extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileExtension') }})
    folder_color_rgb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('folderColorRgb') }})
    full_file_extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullFileExtension') }})
    has_augmented_permissions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasAugmentedPermissions') }})
    has_thumbnail: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasThumbnail') }})
    head_revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headRevisionId') }})
    icon_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconLink') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_media_metadata: Optional[FileImageMediaMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageMediaMetadata') }})
    is_app_authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isAppAuthorized') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    label_info: Optional[FileLabelInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelInfo') }})
    last_modifying_user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifyingUser') }})
    link_share_metadata: Optional[FileLinkShareMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkShareMetadata') }})
    md5_checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('md5Checksum') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    modified_by_me: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedByMe') }})
    modified_by_me_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedByMeTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    modified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    original_filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalFilename') }})
    owned_by_me: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownedByMe') }})
    owners: Optional[List[User]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owners') }})
    parents: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parents') }})
    permission_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionIds') }})
    permissions: Optional[List[Permission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    quota_bytes_used: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaBytesUsed') }})
    resource_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceKey') }})
    sha1_checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha1Checksum') }})
    sha256_checksum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha256Checksum') }})
    shared: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shared') }})
    shared_with_me_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharedWithMeTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sharing_user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sharingUser') }})
    shortcut_details: Optional[FileShortcutDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortcutDetails') }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    spaces: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spaces') }})
    starred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('starred') }})
    team_drive_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamDriveId') }})
    thumbnail_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailLink') }})
    thumbnail_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailVersion') }})
    trashed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trashed') }})
    trashed_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trashedTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trashing_user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trashingUser') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    video_media_metadata: Optional[FileVideoMediaMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoMediaMetadata') }})
    viewed_by_me: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewedByMe') }})
    viewed_by_me_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewedByMeTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    viewers_can_copy_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewersCanCopyContent') }})
    web_content_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webContentLink') }})
    web_view_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webViewLink') }})
    writers_can_share: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writersCanShare') }})
    
