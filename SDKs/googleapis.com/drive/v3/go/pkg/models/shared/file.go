package shared

import (
	"time"
)

type FileCapabilities struct {
	CanAcceptOwnership                    *bool `json:"canAcceptOwnership"`
	CanAddChildren                        *bool `json:"canAddChildren"`
	CanAddFolderFromAnotherDrive          *bool `json:"canAddFolderFromAnotherDrive"`
	CanAddMyDriveParent                   *bool `json:"canAddMyDriveParent"`
	CanChangeCopyRequiresWriterPermission *bool `json:"canChangeCopyRequiresWriterPermission"`
	CanChangeSecurityUpdateEnabled        *bool `json:"canChangeSecurityUpdateEnabled"`
	CanChangeViewersCanCopyContent        *bool `json:"canChangeViewersCanCopyContent"`
	CanComment                            *bool `json:"canComment"`
	CanCopy                               *bool `json:"canCopy"`
	CanDelete                             *bool `json:"canDelete"`
	CanDeleteChildren                     *bool `json:"canDeleteChildren"`
	CanDownload                           *bool `json:"canDownload"`
	CanEdit                               *bool `json:"canEdit"`
	CanListChildren                       *bool `json:"canListChildren"`
	CanModifyContent                      *bool `json:"canModifyContent"`
	CanModifyContentRestriction           *bool `json:"canModifyContentRestriction"`
	CanModifyLabels                       *bool `json:"canModifyLabels"`
	CanMoveChildrenOutOfDrive             *bool `json:"canMoveChildrenOutOfDrive"`
	CanMoveChildrenOutOfTeamDrive         *bool `json:"canMoveChildrenOutOfTeamDrive"`
	CanMoveChildrenWithinDrive            *bool `json:"canMoveChildrenWithinDrive"`
	CanMoveChildrenWithinTeamDrive        *bool `json:"canMoveChildrenWithinTeamDrive"`
	CanMoveItemIntoTeamDrive              *bool `json:"canMoveItemIntoTeamDrive"`
	CanMoveItemOutOfDrive                 *bool `json:"canMoveItemOutOfDrive"`
	CanMoveItemOutOfTeamDrive             *bool `json:"canMoveItemOutOfTeamDrive"`
	CanMoveItemWithinDrive                *bool `json:"canMoveItemWithinDrive"`
	CanMoveItemWithinTeamDrive            *bool `json:"canMoveItemWithinTeamDrive"`
	CanMoveTeamDriveItem                  *bool `json:"canMoveTeamDriveItem"`
	CanReadDrive                          *bool `json:"canReadDrive"`
	CanReadLabels                         *bool `json:"canReadLabels"`
	CanReadRevisions                      *bool `json:"canReadRevisions"`
	CanReadTeamDrive                      *bool `json:"canReadTeamDrive"`
	CanRemoveChildren                     *bool `json:"canRemoveChildren"`
	CanRemoveMyDriveParent                *bool `json:"canRemoveMyDriveParent"`
	CanRename                             *bool `json:"canRename"`
	CanShare                              *bool `json:"canShare"`
	CanTrash                              *bool `json:"canTrash"`
	CanTrashChildren                      *bool `json:"canTrashChildren"`
	CanUntrash                            *bool `json:"canUntrash"`
}

type FileContentHintsThumbnail struct {
	Image    *string `json:"image"`
	MimeType *string `json:"mimeType"`
}

type FileContentHints struct {
	IndexableText *string                    `json:"indexableText"`
	Thumbnail     *FileContentHintsThumbnail `json:"thumbnail"`
}

type FileImageMediaMetadataLocation struct {
	Altitude  *float64 `json:"altitude"`
	Latitude  *float64 `json:"latitude"`
	Longitude *float64 `json:"longitude"`
}

type FileImageMediaMetadata struct {
	Aperture         *float32                        `json:"aperture"`
	CameraMake       *string                         `json:"cameraMake"`
	CameraModel      *string                         `json:"cameraModel"`
	ColorSpace       *string                         `json:"colorSpace"`
	ExposureBias     *float32                        `json:"exposureBias"`
	ExposureMode     *string                         `json:"exposureMode"`
	ExposureTime     *float32                        `json:"exposureTime"`
	FlashUsed        *bool                           `json:"flashUsed"`
	FocalLength      *float32                        `json:"focalLength"`
	Height           *int32                          `json:"height"`
	IsoSpeed         *int32                          `json:"isoSpeed"`
	Lens             *string                         `json:"lens"`
	Location         *FileImageMediaMetadataLocation `json:"location"`
	MaxApertureValue *float32                        `json:"maxApertureValue"`
	MeteringMode     *string                         `json:"meteringMode"`
	Rotation         *int32                          `json:"rotation"`
	Sensor           *string                         `json:"sensor"`
	SubjectDistance  *int32                          `json:"subjectDistance"`
	Time             *string                         `json:"time"`
	WhiteBalance     *string                         `json:"whiteBalance"`
	Width            *int32                          `json:"width"`
}

type FileLabelInfo struct {
	Labels []Label `json:"labels"`
}

type FileLinkShareMetadata struct {
	SecurityUpdateEligible *bool `json:"securityUpdateEligible"`
	SecurityUpdateEnabled  *bool `json:"securityUpdateEnabled"`
}

type FileShortcutDetails struct {
	TargetID          *string `json:"targetId"`
	TargetMimeType    *string `json:"targetMimeType"`
	TargetResourceKey *string `json:"targetResourceKey"`
}

type FileVideoMediaMetadata struct {
	DurationMillis *string `json:"durationMillis"`
	Height         *int32  `json:"height"`
	Width          *int32  `json:"width"`
}

type File struct {
	AppProperties                map[string]string       `json:"appProperties"`
	Capabilities                 *FileCapabilities       `json:"capabilities"`
	ContentHints                 *FileContentHints       `json:"contentHints"`
	ContentRestrictions          []ContentRestriction    `json:"contentRestrictions"`
	CopyRequiresWriterPermission *bool                   `json:"copyRequiresWriterPermission"`
	CreatedTime                  *time.Time              `json:"createdTime"`
	Description                  *string                 `json:"description"`
	DriveID                      *string                 `json:"driveId"`
	ExplicitlyTrashed            *bool                   `json:"explicitlyTrashed"`
	ExportLinks                  map[string]string       `json:"exportLinks"`
	FileExtension                *string                 `json:"fileExtension"`
	FolderColorRgb               *string                 `json:"folderColorRgb"`
	FullFileExtension            *string                 `json:"fullFileExtension"`
	HasAugmentedPermissions      *bool                   `json:"hasAugmentedPermissions"`
	HasThumbnail                 *bool                   `json:"hasThumbnail"`
	HeadRevisionID               *string                 `json:"headRevisionId"`
	IconLink                     *string                 `json:"iconLink"`
	ID                           *string                 `json:"id"`
	ImageMediaMetadata           *FileImageMediaMetadata `json:"imageMediaMetadata"`
	IsAppAuthorized              *bool                   `json:"isAppAuthorized"`
	Kind                         *string                 `json:"kind"`
	LabelInfo                    *FileLabelInfo          `json:"labelInfo"`
	LastModifyingUser            *User                   `json:"lastModifyingUser"`
	LinkShareMetadata            *FileLinkShareMetadata  `json:"linkShareMetadata"`
	Md5Checksum                  *string                 `json:"md5Checksum"`
	MimeType                     *string                 `json:"mimeType"`
	ModifiedByMe                 *bool                   `json:"modifiedByMe"`
	ModifiedByMeTime             *time.Time              `json:"modifiedByMeTime"`
	ModifiedTime                 *time.Time              `json:"modifiedTime"`
	Name                         *string                 `json:"name"`
	OriginalFilename             *string                 `json:"originalFilename"`
	OwnedByMe                    *bool                   `json:"ownedByMe"`
	Owners                       []User                  `json:"owners"`
	Parents                      []string                `json:"parents"`
	PermissionIds                []string                `json:"permissionIds"`
	Permissions                  []Permission            `json:"permissions"`
	Properties                   map[string]string       `json:"properties"`
	QuotaBytesUsed               *string                 `json:"quotaBytesUsed"`
	ResourceKey                  *string                 `json:"resourceKey"`
	Sha1Checksum                 *string                 `json:"sha1Checksum"`
	Sha256Checksum               *string                 `json:"sha256Checksum"`
	Shared                       *bool                   `json:"shared"`
	SharedWithMeTime             *time.Time              `json:"sharedWithMeTime"`
	SharingUser                  *User                   `json:"sharingUser"`
	ShortcutDetails              *FileShortcutDetails    `json:"shortcutDetails"`
	Size                         *string                 `json:"size"`
	Spaces                       []string                `json:"spaces"`
	Starred                      *bool                   `json:"starred"`
	TeamDriveID                  *string                 `json:"teamDriveId"`
	ThumbnailLink                *string                 `json:"thumbnailLink"`
	ThumbnailVersion             *string                 `json:"thumbnailVersion"`
	Trashed                      *bool                   `json:"trashed"`
	TrashedTime                  *time.Time              `json:"trashedTime"`
	TrashingUser                 *User                   `json:"trashingUser"`
	Version                      *string                 `json:"version"`
	VideoMediaMetadata           *FileVideoMediaMetadata `json:"videoMediaMetadata"`
	ViewedByMe                   *bool                   `json:"viewedByMe"`
	ViewedByMeTime               *time.Time              `json:"viewedByMeTime"`
	ViewersCanCopyContent        *bool                   `json:"viewersCanCopyContent"`
	WebContentLink               *string                 `json:"webContentLink"`
	WebViewLink                  *string                 `json:"webViewLink"`
	WritersCanShare              *bool                   `json:"writersCanShare"`
}
