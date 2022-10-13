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

type Photo struct {
	CaptureTime       *string                     `json:"captureTime"`
	Connections       []Connection                `json:"connections"`
	DownloadURL       *string                     `json:"downloadUrl"`
	MapsPublishStatus *PhotoMapsPublishStatusEnum `json:"mapsPublishStatus"`
	PhotoID           *PhotoID                    `json:"photoId"`
	Places            []Place                     `json:"places"`
	Pose              *Pose                       `json:"pose"`
	ShareLink         *string                     `json:"shareLink"`
	ThumbnailURL      *string                     `json:"thumbnailUrl"`
	TransferStatus    *PhotoTransferStatusEnum    `json:"transferStatus"`
	UploadReference   *UploadRef                  `json:"uploadReference"`
	UploadTime        *string                     `json:"uploadTime"`
	ViewCount         *string                     `json:"viewCount"`
}
