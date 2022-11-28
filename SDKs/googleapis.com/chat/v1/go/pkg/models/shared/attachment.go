package shared

type AttachmentSourceEnum string

const (
	AttachmentSourceEnumSourceUnspecified AttachmentSourceEnum = "SOURCE_UNSPECIFIED"
	AttachmentSourceEnumDriveFile         AttachmentSourceEnum = "DRIVE_FILE"
	AttachmentSourceEnumUploadedContent   AttachmentSourceEnum = "UPLOADED_CONTENT"
)

// AttachmentInput
// An attachment in Google Chat.
type AttachmentInput struct {
	AttachmentDataRef *AttachmentDataRef    `json:"attachmentDataRef,omitempty"`
	ContentName       *string               `json:"contentName,omitempty"`
	ContentType       *string               `json:"contentType,omitempty"`
	DriveDataRef      *DriveDataRef         `json:"driveDataRef,omitempty"`
	Name              *string               `json:"name,omitempty"`
	Source            *AttachmentSourceEnum `json:"source,omitempty"`
}

// Attachment
// An attachment in Google Chat.
type Attachment struct {
	AttachmentDataRef *AttachmentDataRef    `json:"attachmentDataRef,omitempty"`
	ContentName       *string               `json:"contentName,omitempty"`
	ContentType       *string               `json:"contentType,omitempty"`
	DownloadURI       *string               `json:"downloadUri,omitempty"`
	DriveDataRef      *DriveDataRef         `json:"driveDataRef,omitempty"`
	Name              *string               `json:"name,omitempty"`
	Source            *AttachmentSourceEnum `json:"source,omitempty"`
	ThumbnailURI      *string               `json:"thumbnailUri,omitempty"`
}
