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
	CanChangeRestrictedDownload           *bool `json:"canChangeRestrictedDownload"`
	CanChangeSecurityUpdateEnabled        *bool `json:"canChangeSecurityUpdateEnabled"`
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
	Date             *string                         `json:"date"`
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
	WhiteBalance     *string                         `json:"whiteBalance"`
	Width            *int32                          `json:"width"`
}

type FileIndexableText struct {
	Text *string `json:"text"`
}

type FileLabelInfo struct {
	Labels []Label `json:"labels"`
}

type FileLabels struct {
	Hidden     *bool `json:"hidden"`
	Modified   *bool `json:"modified"`
	Restricted *bool `json:"restricted"`
	Starred    *bool `json:"starred"`
	Trashed    *bool `json:"trashed"`
	Viewed     *bool `json:"viewed"`
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

type FileThumbnail struct {
	Image    *string `json:"image"`
	MimeType *string `json:"mimeType"`
}

type FileVideoMediaMetadata struct {
	DurationMillis *string `json:"durationMillis"`
	Height         *int32  `json:"height"`
	Width          *int32  `json:"width"`
}

type File struct {
	AlternateLink                *string                 `json:"alternateLink"`
	AppDataContents              *bool                   `json:"appDataContents"`
	CanComment                   *bool                   `json:"canComment"`
	CanReadRevisions             *bool                   `json:"canReadRevisions"`
	Capabilities                 *FileCapabilities       `json:"capabilities"`
	ContentRestrictions          []ContentRestriction    `json:"contentRestrictions"`
	CopyRequiresWriterPermission *bool                   `json:"copyRequiresWriterPermission"`
	Copyable                     *bool                   `json:"copyable"`
	CreatedDate                  *time.Time              `json:"createdDate"`
	DefaultOpenWithLink          *string                 `json:"defaultOpenWithLink"`
	Description                  *string                 `json:"description"`
	DownloadURL                  *string                 `json:"downloadUrl"`
	DriveID                      *string                 `json:"driveId"`
	Editable                     *bool                   `json:"editable"`
	EmbedLink                    *string                 `json:"embedLink"`
	Etag                         *string                 `json:"etag"`
	ExplicitlyTrashed            *bool                   `json:"explicitlyTrashed"`
	ExportLinks                  map[string]string       `json:"exportLinks"`
	FileExtension                *string                 `json:"fileExtension"`
	FileSize                     *string                 `json:"fileSize"`
	FolderColorRgb               *string                 `json:"folderColorRgb"`
	FullFileExtension            *string                 `json:"fullFileExtension"`
	HasAugmentedPermissions      *bool                   `json:"hasAugmentedPermissions"`
	HasThumbnail                 *bool                   `json:"hasThumbnail"`
	HeadRevisionID               *string                 `json:"headRevisionId"`
	IconLink                     *string                 `json:"iconLink"`
	ID                           *string                 `json:"id"`
	ImageMediaMetadata           *FileImageMediaMetadata `json:"imageMediaMetadata"`
	IndexableText                *FileIndexableText      `json:"indexableText"`
	IsAppAuthorized              *bool                   `json:"isAppAuthorized"`
	Kind                         *string                 `json:"kind"`
	LabelInfo                    *FileLabelInfo          `json:"labelInfo"`
	Labels                       *FileLabels             `json:"labels"`
	LastModifyingUser            *User                   `json:"lastModifyingUser"`
	LastModifyingUserName        *string                 `json:"lastModifyingUserName"`
	LastViewedByMeDate           *time.Time              `json:"lastViewedByMeDate"`
	LinkShareMetadata            *FileLinkShareMetadata  `json:"linkShareMetadata"`
	MarkedViewedByMeDate         *time.Time              `json:"markedViewedByMeDate"`
	Md5Checksum                  *string                 `json:"md5Checksum"`
	MimeType                     *string                 `json:"mimeType"`
	ModifiedByMeDate             *time.Time              `json:"modifiedByMeDate"`
	ModifiedDate                 *time.Time              `json:"modifiedDate"`
	OpenWithLinks                map[string]string       `json:"openWithLinks"`
	OriginalFilename             *string                 `json:"originalFilename"`
	OwnedByMe                    *bool                   `json:"ownedByMe"`
	OwnerNames                   []string                `json:"ownerNames"`
	Owners                       []User                  `json:"owners"`
	Parents                      []ParentReference       `json:"parents"`
	PermissionIds                []string                `json:"permissionIds"`
	Permissions                  []Permission            `json:"permissions"`
	Properties                   []Property              `json:"properties"`
	QuotaBytesUsed               *string                 `json:"quotaBytesUsed"`
	ResourceKey                  *string                 `json:"resourceKey"`
	SelfLink                     *string                 `json:"selfLink"`
	Sha1Checksum                 *string                 `json:"sha1Checksum"`
	Sha256Checksum               *string                 `json:"sha256Checksum"`
	Shareable                    *bool                   `json:"shareable"`
	Shared                       *bool                   `json:"shared"`
	SharedWithMeDate             *time.Time              `json:"sharedWithMeDate"`
	SharingUser                  *User                   `json:"sharingUser"`
	ShortcutDetails              *FileShortcutDetails    `json:"shortcutDetails"`
	Spaces                       []string                `json:"spaces"`
	TeamDriveID                  *string                 `json:"teamDriveId"`
	Thumbnail                    *FileThumbnail          `json:"thumbnail"`
	ThumbnailLink                *string                 `json:"thumbnailLink"`
	ThumbnailVersion             *string                 `json:"thumbnailVersion"`
	Title                        *string                 `json:"title"`
	TrashedDate                  *time.Time              `json:"trashedDate"`
	TrashingUser                 *User                   `json:"trashingUser"`
	UserPermission               *Permission             `json:"userPermission"`
	Version                      *string                 `json:"version"`
	VideoMediaMetadata           *FileVideoMediaMetadata `json:"videoMediaMetadata"`
	WebContentLink               *string                 `json:"webContentLink"`
	WebViewLink                  *string                 `json:"webViewLink"`
	WritersCanShare              *bool                   `json:"writersCanShare"`
}
