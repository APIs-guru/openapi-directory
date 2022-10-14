package shared

import (
	"time"
)

type FileCapabilities struct {
	CanAcceptOwnership                    *bool `json:"canAcceptOwnership,omitempty"`
	CanAddChildren                        *bool `json:"canAddChildren,omitempty"`
	CanAddFolderFromAnotherDrive          *bool `json:"canAddFolderFromAnotherDrive,omitempty"`
	CanAddMyDriveParent                   *bool `json:"canAddMyDriveParent,omitempty"`
	CanChangeCopyRequiresWriterPermission *bool `json:"canChangeCopyRequiresWriterPermission,omitempty"`
	CanChangeSecurityUpdateEnabled        *bool `json:"canChangeSecurityUpdateEnabled,omitempty"`
	CanChangeViewersCanCopyContent        *bool `json:"canChangeViewersCanCopyContent,omitempty"`
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

type FileContentHintsThumbnail struct {
	Image    *string `json:"image,omitempty"`
	MimeType *string `json:"mimeType,omitempty"`
}

type FileContentHints struct {
	IndexableText *string                    `json:"indexableText,omitempty"`
	Thumbnail     *FileContentHintsThumbnail `json:"thumbnail,omitempty"`
}

type FileImageMediaMetadataLocation struct {
	Altitude  *float64 `json:"altitude,omitempty"`
	Latitude  *float64 `json:"latitude,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
}

type FileImageMediaMetadata struct {
	Aperture         *float32                        `json:"aperture,omitempty"`
	CameraMake       *string                         `json:"cameraMake,omitempty"`
	CameraModel      *string                         `json:"cameraModel,omitempty"`
	ColorSpace       *string                         `json:"colorSpace,omitempty"`
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
	Time             *string                         `json:"time,omitempty"`
	WhiteBalance     *string                         `json:"whiteBalance,omitempty"`
	Width            *int32                          `json:"width,omitempty"`
}

type FileLabelInfo struct {
	Labels []Label `json:"labels,omitempty"`
}

type FileLinkShareMetadata struct {
	SecurityUpdateEligible *bool `json:"securityUpdateEligible,omitempty"`
	SecurityUpdateEnabled  *bool `json:"securityUpdateEnabled,omitempty"`
}

type FileShortcutDetails struct {
	TargetID          *string `json:"targetId,omitempty"`
	TargetMimeType    *string `json:"targetMimeType,omitempty"`
	TargetResourceKey *string `json:"targetResourceKey,omitempty"`
}

type FileVideoMediaMetadata struct {
	DurationMillis *string `json:"durationMillis,omitempty"`
	Height         *int32  `json:"height,omitempty"`
	Width          *int32  `json:"width,omitempty"`
}

type File struct {
	AppProperties                map[string]string       `json:"appProperties,omitempty"`
	Capabilities                 *FileCapabilities       `json:"capabilities,omitempty"`
	ContentHints                 *FileContentHints       `json:"contentHints,omitempty"`
	ContentRestrictions          []ContentRestriction    `json:"contentRestrictions,omitempty"`
	CopyRequiresWriterPermission *bool                   `json:"copyRequiresWriterPermission,omitempty"`
	CreatedTime                  *time.Time              `json:"createdTime,omitempty"`
	Description                  *string                 `json:"description,omitempty"`
	DriveID                      *string                 `json:"driveId,omitempty"`
	ExplicitlyTrashed            *bool                   `json:"explicitlyTrashed,omitempty"`
	ExportLinks                  map[string]string       `json:"exportLinks,omitempty"`
	FileExtension                *string                 `json:"fileExtension,omitempty"`
	FolderColorRgb               *string                 `json:"folderColorRgb,omitempty"`
	FullFileExtension            *string                 `json:"fullFileExtension,omitempty"`
	HasAugmentedPermissions      *bool                   `json:"hasAugmentedPermissions,omitempty"`
	HasThumbnail                 *bool                   `json:"hasThumbnail,omitempty"`
	HeadRevisionID               *string                 `json:"headRevisionId,omitempty"`
	IconLink                     *string                 `json:"iconLink,omitempty"`
	ID                           *string                 `json:"id,omitempty"`
	ImageMediaMetadata           *FileImageMediaMetadata `json:"imageMediaMetadata,omitempty"`
	IsAppAuthorized              *bool                   `json:"isAppAuthorized,omitempty"`
	Kind                         *string                 `json:"kind,omitempty"`
	LabelInfo                    *FileLabelInfo          `json:"labelInfo,omitempty"`
	LastModifyingUser            *User                   `json:"lastModifyingUser,omitempty"`
	LinkShareMetadata            *FileLinkShareMetadata  `json:"linkShareMetadata,omitempty"`
	Md5Checksum                  *string                 `json:"md5Checksum,omitempty"`
	MimeType                     *string                 `json:"mimeType,omitempty"`
	ModifiedByMe                 *bool                   `json:"modifiedByMe,omitempty"`
	ModifiedByMeTime             *time.Time              `json:"modifiedByMeTime,omitempty"`
	ModifiedTime                 *time.Time              `json:"modifiedTime,omitempty"`
	Name                         *string                 `json:"name,omitempty"`
	OriginalFilename             *string                 `json:"originalFilename,omitempty"`
	OwnedByMe                    *bool                   `json:"ownedByMe,omitempty"`
	Owners                       []User                  `json:"owners,omitempty"`
	Parents                      []string                `json:"parents,omitempty"`
	PermissionIds                []string                `json:"permissionIds,omitempty"`
	Permissions                  []Permission            `json:"permissions,omitempty"`
	Properties                   map[string]string       `json:"properties,omitempty"`
	QuotaBytesUsed               *string                 `json:"quotaBytesUsed,omitempty"`
	ResourceKey                  *string                 `json:"resourceKey,omitempty"`
	Sha1Checksum                 *string                 `json:"sha1Checksum,omitempty"`
	Sha256Checksum               *string                 `json:"sha256Checksum,omitempty"`
	Shared                       *bool                   `json:"shared,omitempty"`
	SharedWithMeTime             *time.Time              `json:"sharedWithMeTime,omitempty"`
	SharingUser                  *User                   `json:"sharingUser,omitempty"`
	ShortcutDetails              *FileShortcutDetails    `json:"shortcutDetails,omitempty"`
	Size                         *string                 `json:"size,omitempty"`
	Spaces                       []string                `json:"spaces,omitempty"`
	Starred                      *bool                   `json:"starred,omitempty"`
	TeamDriveID                  *string                 `json:"teamDriveId,omitempty"`
	ThumbnailLink                *string                 `json:"thumbnailLink,omitempty"`
	ThumbnailVersion             *string                 `json:"thumbnailVersion,omitempty"`
	Trashed                      *bool                   `json:"trashed,omitempty"`
	TrashedTime                  *time.Time              `json:"trashedTime,omitempty"`
	TrashingUser                 *User                   `json:"trashingUser,omitempty"`
	Version                      *string                 `json:"version,omitempty"`
	VideoMediaMetadata           *FileVideoMediaMetadata `json:"videoMediaMetadata,omitempty"`
	ViewedByMe                   *bool                   `json:"viewedByMe,omitempty"`
	ViewedByMeTime               *time.Time              `json:"viewedByMeTime,omitempty"`
	ViewersCanCopyContent        *bool                   `json:"viewersCanCopyContent,omitempty"`
	WebContentLink               *string                 `json:"webContentLink,omitempty"`
	WebViewLink                  *string                 `json:"webViewLink,omitempty"`
	WritersCanShare              *bool                   `json:"writersCanShare,omitempty"`
}
