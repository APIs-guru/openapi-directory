package shared

type PhotoMapsPublishStatusEnum string

const (
	PhotoMapsPublishStatusEnumUnspecifiedMapsPublishStatus PhotoMapsPublishStatusEnum = "UNSPECIFIED_MAPS_PUBLISH_STATUS"
	PhotoMapsPublishStatusEnumPublished                    PhotoMapsPublishStatusEnum = "PUBLISHED"
	PhotoMapsPublishStatusEnumRejectedUnknown              PhotoMapsPublishStatusEnum = "REJECTED_UNKNOWN"
)

type PhotoTransferStatusEnum string

const (
	PhotoTransferStatusEnumTransferStatusUnknown PhotoTransferStatusEnum = "TRANSFER_STATUS_UNKNOWN"
	PhotoTransferStatusEnumNeverTransferred      PhotoTransferStatusEnum = "NEVER_TRANSFERRED"
	PhotoTransferStatusEnumPending               PhotoTransferStatusEnum = "PENDING"
	PhotoTransferStatusEnumCompleted             PhotoTransferStatusEnum = "COMPLETED"
	PhotoTransferStatusEnumRejected              PhotoTransferStatusEnum = "REJECTED"
	PhotoTransferStatusEnumExpired               PhotoTransferStatusEnum = "EXPIRED"
	PhotoTransferStatusEnumCancelled             PhotoTransferStatusEnum = "CANCELLED"
	PhotoTransferStatusEnumReceivedViaTransfer   PhotoTransferStatusEnum = "RECEIVED_VIA_TRANSFER"
)

// PhotoInput
// Photo is used to store 360 photos along with photo metadata.
type PhotoInput struct {
	CaptureTime     *string      `json:"captureTime,omitempty"`
	Connections     []Connection `json:"connections,omitempty"`
	PhotoID         *PhotoID     `json:"photoId,omitempty"`
	Places          []PlaceInput `json:"places,omitempty"`
	Pose            *Pose        `json:"pose,omitempty"`
	UploadReference *UploadRef   `json:"uploadReference,omitempty"`
}

// Photo
// Photo is used to store 360 photos along with photo metadata.
type Photo struct {
	CaptureTime       *string                     `json:"captureTime,omitempty"`
	Connections       []Connection                `json:"connections,omitempty"`
	DownloadURL       *string                     `json:"downloadUrl,omitempty"`
	MapsPublishStatus *PhotoMapsPublishStatusEnum `json:"mapsPublishStatus,omitempty"`
	PhotoID           *PhotoID                    `json:"photoId,omitempty"`
	Places            []Place                     `json:"places,omitempty"`
	Pose              *Pose                       `json:"pose,omitempty"`
	ShareLink         *string                     `json:"shareLink,omitempty"`
	ThumbnailURL      *string                     `json:"thumbnailUrl,omitempty"`
	TransferStatus    *PhotoTransferStatusEnum    `json:"transferStatus,omitempty"`
	UploadReference   *UploadRef                  `json:"uploadReference,omitempty"`
	UploadTime        *string                     `json:"uploadTime,omitempty"`
	ViewCount         *string                     `json:"viewCount,omitempty"`
}
