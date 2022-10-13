package shared

type AttachmentSourceEnum string

const (
	AttachmentSourceEnumSourceUnspecified AttachmentSourceEnum = "SOURCE_UNSPECIFIED"
	AttachmentSourceEnumDriveFile         AttachmentSourceEnum = "DRIVE_FILE"
	AttachmentSourceEnumUploadedContent   AttachmentSourceEnum = "UPLOADED_CONTENT"
)

type Attachment struct {
	AttachmentDataRef *AttachmentDataRef    `json:"attachmentDataRef"`
	ContentName       *string               `json:"contentName"`
	ContentType       *string               `json:"contentType"`
	DownloadURI       *string               `json:"downloadUri"`
	DriveDataRef      *DriveDataRef         `json:"driveDataRef"`
	Name              *string               `json:"name"`
	Source            *AttachmentSourceEnum `json:"source"`
	ThumbnailURI      *string               `json:"thumbnailUri"`
}
