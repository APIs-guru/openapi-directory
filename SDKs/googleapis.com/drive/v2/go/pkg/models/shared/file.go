package shared

import (
	"time"
)

// FileCapabilities
// Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
type FileCapabilities struct {
	CanAcceptOwnership                    *bool `json:"canAcceptOwnership,omitempty"`
	CanAddChildren                        *bool `json:"canAddChildren,omitempty"`
	CanAddFolderFromAnotherDrive          *bool `json:"canAddFolderFromAnotherDrive,omitempty"`
	CanAddMyDriveParent                   *bool `json:"canAddMyDriveParent,omitempty"`
	CanChangeCopyRequiresWriterPermission *bool `json:"canChangeCopyRequiresWriterPermission,omitempty"`
	CanChangeRestrictedDownload           *bool `json:"canChangeRestrictedDownload,omitempty"`
	CanChangeSecurityUpdateEnabled        *bool `json:"canChangeSecurityUpdateEnabled,omitempty"`
	CanComment                            *bool `json:"canComment,omitempty"`
	CanCopy                               *bool `json:"canCopy,omitempty"`
	CanDelete                             *bool `json:"canDelete,omitempty"`
	CanDeleteChildren                     *bool `json:"canDeleteChildren,omitempty"`
	CanDownload                           *bool `json:"canDownload,omitempty"`
	CanEdit                               *bool `json:"canEdit,omitempty"`
	CanListChildren                       *bool `json:"canListChildren,omitempty"`
	CanModifyContent                      *bool `json:"canModifyContent,omitempty"`
	CanModifyContentRestriction           *bool `json:"canModifyContentRestriction,omitempty"`
	CanModifyLabels                       *bool `json:"canModifyLabels,omitempty"`
	CanMoveChildrenOutOfDrive             *bool `json:"canMoveChildrenOutOfDrive,omitempty"`
	CanMoveChildrenOutOfTeamDrive         *bool `json:"canMoveChildrenOutOfTeamDrive,omitempty"`
	CanMoveChildrenWithinDrive            *bool `json:"canMoveChildrenWithinDrive,omitempty"`
	CanMoveChildrenWithinTeamDrive        *bool `json:"canMoveChildrenWithinTeamDrive,omitempty"`
	CanMoveItemIntoTeamDrive              *bool `json:"canMoveItemIntoTeamDrive,omitempty"`
	CanMoveItemOutOfDrive                 *bool `json:"canMoveItemOutOfDrive,omitempty"`
	CanMoveItemOutOfTeamDrive             *bool `json:"canMoveItemOutOfTeamDrive,omitempty"`
	CanMoveItemWithinDrive                *bool `json:"canMoveItemWithinDrive,omitempty"`
	CanMoveItemWithinTeamDrive            *bool `json:"canMoveItemWithinTeamDrive,omitempty"`
	CanMoveTeamDriveItem                  *bool `json:"canMoveTeamDriveItem,omitempty"`
	CanReadDrive                          *bool `json:"canReadDrive,omitempty"`
	CanReadLabels                         *bool `json:"canReadLabels,omitempty"`
	CanReadRevisions                      *bool `json:"canReadRevisions,omitempty"`
	CanReadTeamDrive                      *bool `json:"canReadTeamDrive,omitempty"`
	CanRemoveChildren                     *bool `json:"canRemoveChildren,omitempty"`
	CanRemoveMyDriveParent                *bool `json:"canRemoveMyDriveParent,omitempty"`
	CanRename                             *bool `json:"canRename,omitempty"`
	CanShare                              *bool `json:"canShare,omitempty"`
	CanTrash                              *bool `json:"canTrash,omitempty"`
	CanTrashChildren                      *bool `json:"canTrashChildren,omitempty"`
	CanUntrash                            *bool `json:"canUntrash,omitempty"`
}

// FileImageMediaMetadataLocation
// Geographic location information stored in the image.
type FileImageMediaMetadataLocation struct {
	Altitude  *float64 `json:"altitude,omitempty"`
	Latitude  *float64 `json:"latitude,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
}

// FileImageMediaMetadata
// Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.
type FileImageMediaMetadata struct {
	Aperture         *float32                        `json:"aperture,omitempty"`
	CameraMake       *string                         `json:"cameraMake,omitempty"`
	CameraModel      *string                         `json:"cameraModel,omitempty"`
	ColorSpace       *string                         `json:"colorSpace,omitempty"`
	Date             *string                         `json:"date,omitempty"`
	ExposureBias     *float32                        `json:"exposureBias,omitempty"`
	ExposureMode     *string                         `json:"exposureMode,omitempty"`
	ExposureTime     *float32                        `json:"exposureTime,omitempty"`
	FlashUsed        *bool                           `json:"flashUsed,omitempty"`
	FocalLength      *float32                        `json:"focalLength,omitempty"`
	Height           *int32                          `json:"height,omitempty"`
	IsoSpeed         *int32                          `json:"isoSpeed,omitempty"`
	Lens             *string                         `json:"lens,omitempty"`
	Location         *FileImageMediaMetadataLocation `json:"location,omitempty"`
	MaxApertureValue *float32                        `json:"maxApertureValue,omitempty"`
	MeteringMode     *string                         `json:"meteringMode,omitempty"`
	Rotation         *int32                          `json:"rotation,omitempty"`
	Sensor           *string                         `json:"sensor,omitempty"`
	SubjectDistance  *int32                          `json:"subjectDistance,omitempty"`
	WhiteBalance     *string                         `json:"whiteBalance,omitempty"`
	Width            *int32                          `json:"width,omitempty"`
}

// FileIndexableText
// Indexable text attributes for the file (can only be written). For more information, see Manage file metadata.
type FileIndexableText struct {
	Text *string `json:"text,omitempty"`
}

// FileLabelInfo
// An overview of the labels on the file.
type FileLabelInfo struct {
	Labels []Label `json:"labels,omitempty"`
}

// FileLabels
// A group of labels for the file.
type FileLabels struct {
	Hidden     *bool `json:"hidden,omitempty"`
	Modified   *bool `json:"modified,omitempty"`
	Restricted *bool `json:"restricted,omitempty"`
	Starred    *bool `json:"starred,omitempty"`
	Trashed    *bool `json:"trashed,omitempty"`
	Viewed     *bool `json:"viewed,omitempty"`
}

// FileLinkShareMetadata
// Contains details about the link URLs that clients are using to refer to this item.
type FileLinkShareMetadata struct {
	SecurityUpdateEligible *bool `json:"securityUpdateEligible,omitempty"`
	SecurityUpdateEnabled  *bool `json:"securityUpdateEnabled,omitempty"`
}

// FileShortcutDetails
// Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.
type FileShortcutDetails struct {
	TargetID          *string `json:"targetId,omitempty"`
	TargetMimeType    *string `json:"targetMimeType,omitempty"`
	TargetResourceKey *string `json:"targetResourceKey,omitempty"`
}

// FileThumbnail
// A thumbnail for the file. This will only be used if a standard thumbnail cannot be generated.
type FileThumbnail struct {
	Image    *string `json:"image,omitempty"`
	MimeType *string `json:"mimeType,omitempty"`
}

// FileVideoMediaMetadata
// Metadata about video media. This will only be present for video types.
type FileVideoMediaMetadata struct {
	DurationMillis *string `json:"durationMillis,omitempty"`
	Height         *int32  `json:"height,omitempty"`
	Width          *int32  `json:"width,omitempty"`
}

// File
// The metadata for a file.
type File struct {
	AlternateLink                *string                 `json:"alternateLink,omitempty"`
	AppDataContents              *bool                   `json:"appDataContents,omitempty"`
	CanComment                   *bool                   `json:"canComment,omitempty"`
	CanReadRevisions             *bool                   `json:"canReadRevisions,omitempty"`
	Capabilities                 *FileCapabilities       `json:"capabilities,omitempty"`
	ContentRestrictions          []ContentRestriction    `json:"contentRestrictions,omitempty"`
	CopyRequiresWriterPermission *bool                   `json:"copyRequiresWriterPermission,omitempty"`
	Copyable                     *bool                   `json:"copyable,omitempty"`
	CreatedDate                  *time.Time              `json:"createdDate,omitempty"`
	DefaultOpenWithLink          *string                 `json:"defaultOpenWithLink,omitempty"`
	Description                  *string                 `json:"description,omitempty"`
	DownloadURL                  *string                 `json:"downloadUrl,omitempty"`
	DriveID                      *string                 `json:"driveId,omitempty"`
	Editable                     *bool                   `json:"editable,omitempty"`
	EmbedLink                    *string                 `json:"embedLink,omitempty"`
	Etag                         *string                 `json:"etag,omitempty"`
	ExplicitlyTrashed            *bool                   `json:"explicitlyTrashed,omitempty"`
	ExportLinks                  map[string]string       `json:"exportLinks,omitempty"`
	FileExtension                *string                 `json:"fileExtension,omitempty"`
	FileSize                     *string                 `json:"fileSize,omitempty"`
	FolderColorRgb               *string                 `json:"folderColorRgb,omitempty"`
	FullFileExtension            *string                 `json:"fullFileExtension,omitempty"`
	HasAugmentedPermissions      *bool                   `json:"hasAugmentedPermissions,omitempty"`
	HasThumbnail                 *bool                   `json:"hasThumbnail,omitempty"`
	HeadRevisionID               *string                 `json:"headRevisionId,omitempty"`
	IconLink                     *string                 `json:"iconLink,omitempty"`
	ID                           *string                 `json:"id,omitempty"`
	ImageMediaMetadata           *FileImageMediaMetadata `json:"imageMediaMetadata,omitempty"`
	IndexableText                *FileIndexableText      `json:"indexableText,omitempty"`
	IsAppAuthorized              *bool                   `json:"isAppAuthorized,omitempty"`
	Kind                         *string                 `json:"kind,omitempty"`
	LabelInfo                    *FileLabelInfo          `json:"labelInfo,omitempty"`
	Labels                       *FileLabels             `json:"labels,omitempty"`
	LastModifyingUser            *User                   `json:"lastModifyingUser,omitempty"`
	LastModifyingUserName        *string                 `json:"lastModifyingUserName,omitempty"`
	LastViewedByMeDate           *time.Time              `json:"lastViewedByMeDate,omitempty"`
	LinkShareMetadata            *FileLinkShareMetadata  `json:"linkShareMetadata,omitempty"`
	MarkedViewedByMeDate         *time.Time              `json:"markedViewedByMeDate,omitempty"`
	Md5Checksum                  *string                 `json:"md5Checksum,omitempty"`
	MimeType                     *string                 `json:"mimeType,omitempty"`
	ModifiedByMeDate             *time.Time              `json:"modifiedByMeDate,omitempty"`
	ModifiedDate                 *time.Time              `json:"modifiedDate,omitempty"`
	OpenWithLinks                map[string]string       `json:"openWithLinks,omitempty"`
	OriginalFilename             *string                 `json:"originalFilename,omitempty"`
	OwnedByMe                    *bool                   `json:"ownedByMe,omitempty"`
	OwnerNames                   []string                `json:"ownerNames,omitempty"`
	Owners                       []User                  `json:"owners,omitempty"`
	Parents                      []ParentReference       `json:"parents,omitempty"`
	PermissionIds                []string                `json:"permissionIds,omitempty"`
	Permissions                  []Permission            `json:"permissions,omitempty"`
	Properties                   []Property              `json:"properties,omitempty"`
	QuotaBytesUsed               *string                 `json:"quotaBytesUsed,omitempty"`
	ResourceKey                  *string                 `json:"resourceKey,omitempty"`
	SelfLink                     *string                 `json:"selfLink,omitempty"`
	Sha1Checksum                 *string                 `json:"sha1Checksum,omitempty"`
	Sha256Checksum               *string                 `json:"sha256Checksum,omitempty"`
	Shareable                    *bool                   `json:"shareable,omitempty"`
	Shared                       *bool                   `json:"shared,omitempty"`
	SharedWithMeDate             *time.Time              `json:"sharedWithMeDate,omitempty"`
	SharingUser                  *User                   `json:"sharingUser,omitempty"`
	ShortcutDetails              *FileShortcutDetails    `json:"shortcutDetails,omitempty"`
	Spaces                       []string                `json:"spaces,omitempty"`
	TeamDriveID                  *string                 `json:"teamDriveId,omitempty"`
	Thumbnail                    *FileThumbnail          `json:"thumbnail,omitempty"`
	ThumbnailLink                *string                 `json:"thumbnailLink,omitempty"`
	ThumbnailVersion             *string                 `json:"thumbnailVersion,omitempty"`
	Title                        *string                 `json:"title,omitempty"`
	TrashedDate                  *time.Time              `json:"trashedDate,omitempty"`
	TrashingUser                 *User                   `json:"trashingUser,omitempty"`
	UserPermission               *Permission             `json:"userPermission,omitempty"`
	Version                      *string                 `json:"version,omitempty"`
	VideoMediaMetadata           *FileVideoMediaMetadata `json:"videoMediaMetadata,omitempty"`
	WebContentLink               *string                 `json:"webContentLink,omitempty"`
	WebViewLink                  *string                 `json:"webViewLink,omitempty"`
	WritersCanShare              *bool                   `json:"writersCanShare,omitempty"`
}

// FileInput
// The metadata for a file.
type FileInput struct {
	AlternateLink                *string                 `json:"alternateLink,omitempty"`
	AppDataContents              *bool                   `json:"appDataContents,omitempty"`
	CanComment                   *bool                   `json:"canComment,omitempty"`
	CanReadRevisions             *bool                   `json:"canReadRevisions,omitempty"`
	Capabilities                 *FileCapabilities       `json:"capabilities,omitempty"`
	ContentRestrictions          []ContentRestriction    `json:"contentRestrictions,omitempty"`
	CopyRequiresWriterPermission *bool                   `json:"copyRequiresWriterPermission,omitempty"`
	Copyable                     *bool                   `json:"copyable,omitempty"`
	CreatedDate                  *time.Time              `json:"createdDate,omitempty"`
	DefaultOpenWithLink          *string                 `json:"defaultOpenWithLink,omitempty"`
	Description                  *string                 `json:"description,omitempty"`
	DownloadURL                  *string                 `json:"downloadUrl,omitempty"`
	DriveID                      *string                 `json:"driveId,omitempty"`
	Editable                     *bool                   `json:"editable,omitempty"`
	EmbedLink                    *string                 `json:"embedLink,omitempty"`
	Etag                         *string                 `json:"etag,omitempty"`
	ExplicitlyTrashed            *bool                   `json:"explicitlyTrashed,omitempty"`
	FileExtension                *string                 `json:"fileExtension,omitempty"`
	FileSize                     *string                 `json:"fileSize,omitempty"`
	FolderColorRgb               *string                 `json:"folderColorRgb,omitempty"`
	FullFileExtension            *string                 `json:"fullFileExtension,omitempty"`
	HasAugmentedPermissions      *bool                   `json:"hasAugmentedPermissions,omitempty"`
	HasThumbnail                 *bool                   `json:"hasThumbnail,omitempty"`
	HeadRevisionID               *string                 `json:"headRevisionId,omitempty"`
	IconLink                     *string                 `json:"iconLink,omitempty"`
	ID                           *string                 `json:"id,omitempty"`
	ImageMediaMetadata           *FileImageMediaMetadata `json:"imageMediaMetadata,omitempty"`
	IndexableText                *FileIndexableText      `json:"indexableText,omitempty"`
	IsAppAuthorized              *bool                   `json:"isAppAuthorized,omitempty"`
	Kind                         *string                 `json:"kind,omitempty"`
	LabelInfo                    *FileLabelInfo          `json:"labelInfo,omitempty"`
	Labels                       *FileLabels             `json:"labels,omitempty"`
	LastModifyingUser            *User                   `json:"lastModifyingUser,omitempty"`
	LastModifyingUserName        *string                 `json:"lastModifyingUserName,omitempty"`
	LastViewedByMeDate           *time.Time              `json:"lastViewedByMeDate,omitempty"`
	LinkShareMetadata            *FileLinkShareMetadata  `json:"linkShareMetadata,omitempty"`
	MarkedViewedByMeDate         *time.Time              `json:"markedViewedByMeDate,omitempty"`
	Md5Checksum                  *string                 `json:"md5Checksum,omitempty"`
	MimeType                     *string                 `json:"mimeType,omitempty"`
	ModifiedByMeDate             *time.Time              `json:"modifiedByMeDate,omitempty"`
	ModifiedDate                 *time.Time              `json:"modifiedDate,omitempty"`
	OpenWithLinks                map[string]string       `json:"openWithLinks,omitempty"`
	OriginalFilename             *string                 `json:"originalFilename,omitempty"`
	OwnedByMe                    *bool                   `json:"ownedByMe,omitempty"`
	OwnerNames                   []string                `json:"ownerNames,omitempty"`
	Owners                       []User                  `json:"owners,omitempty"`
	Parents                      []ParentReference       `json:"parents,omitempty"`
	PermissionIds                []string                `json:"permissionIds,omitempty"`
	Permissions                  []PermissionInput       `json:"permissions,omitempty"`
	Properties                   []Property              `json:"properties,omitempty"`
	QuotaBytesUsed               *string                 `json:"quotaBytesUsed,omitempty"`
	ResourceKey                  *string                 `json:"resourceKey,omitempty"`
	SelfLink                     *string                 `json:"selfLink,omitempty"`
	Sha1Checksum                 *string                 `json:"sha1Checksum,omitempty"`
	Sha256Checksum               *string                 `json:"sha256Checksum,omitempty"`
	Shareable                    *bool                   `json:"shareable,omitempty"`
	Shared                       *bool                   `json:"shared,omitempty"`
	SharedWithMeDate             *time.Time              `json:"sharedWithMeDate,omitempty"`
	SharingUser                  *User                   `json:"sharingUser,omitempty"`
	ShortcutDetails              *FileShortcutDetails    `json:"shortcutDetails,omitempty"`
	Spaces                       []string                `json:"spaces,omitempty"`
	TeamDriveID                  *string                 `json:"teamDriveId,omitempty"`
	Thumbnail                    *FileThumbnail          `json:"thumbnail,omitempty"`
	ThumbnailLink                *string                 `json:"thumbnailLink,omitempty"`
	ThumbnailVersion             *string                 `json:"thumbnailVersion,omitempty"`
	Title                        *string                 `json:"title,omitempty"`
	TrashedDate                  *time.Time              `json:"trashedDate,omitempty"`
	TrashingUser                 *User                   `json:"trashingUser,omitempty"`
	UserPermission               *PermissionInput        `json:"userPermission,omitempty"`
	Version                      *string                 `json:"version,omitempty"`
	VideoMediaMetadata           *FileVideoMediaMetadata `json:"videoMediaMetadata,omitempty"`
	WebContentLink               *string                 `json:"webContentLink,omitempty"`
	WebViewLink                  *string                 `json:"webViewLink,omitempty"`
	WritersCanShare              *bool                   `json:"writersCanShare,omitempty"`
}
