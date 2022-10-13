package shared

import (
	"time"
)

type VideoStatusFailureReasonEnum string

const (
	VideoStatusFailureReasonEnumConversion    VideoStatusFailureReasonEnum = "conversion"
	VideoStatusFailureReasonEnumInvalidFile   VideoStatusFailureReasonEnum = "invalidFile"
	VideoStatusFailureReasonEnumEmptyFile     VideoStatusFailureReasonEnum = "emptyFile"
	VideoStatusFailureReasonEnumTooSmall      VideoStatusFailureReasonEnum = "tooSmall"
	VideoStatusFailureReasonEnumCodec         VideoStatusFailureReasonEnum = "codec"
	VideoStatusFailureReasonEnumUploadAborted VideoStatusFailureReasonEnum = "uploadAborted"
)

type VideoStatusLicenseEnum string

const (
	VideoStatusLicenseEnumYoutube        VideoStatusLicenseEnum = "youtube"
	VideoStatusLicenseEnumCreativeCommon VideoStatusLicenseEnum = "creativeCommon"
)

type VideoStatusPrivacyStatusEnum string

const (
	VideoStatusPrivacyStatusEnumPublic   VideoStatusPrivacyStatusEnum = "public"
	VideoStatusPrivacyStatusEnumUnlisted VideoStatusPrivacyStatusEnum = "unlisted"
	VideoStatusPrivacyStatusEnumPrivate  VideoStatusPrivacyStatusEnum = "private"
)

type VideoStatusRejectionReasonEnum string

const (
	VideoStatusRejectionReasonEnumCopyright                VideoStatusRejectionReasonEnum = "copyright"
	VideoStatusRejectionReasonEnumInappropriate            VideoStatusRejectionReasonEnum = "inappropriate"
	VideoStatusRejectionReasonEnumDuplicate                VideoStatusRejectionReasonEnum = "duplicate"
	VideoStatusRejectionReasonEnumTermsOfUse               VideoStatusRejectionReasonEnum = "termsOfUse"
	VideoStatusRejectionReasonEnumUploaderAccountSuspended VideoStatusRejectionReasonEnum = "uploaderAccountSuspended"
	VideoStatusRejectionReasonEnumLength                   VideoStatusRejectionReasonEnum = "length"
	VideoStatusRejectionReasonEnumClaim                    VideoStatusRejectionReasonEnum = "claim"
	VideoStatusRejectionReasonEnumUploaderAccountClosed    VideoStatusRejectionReasonEnum = "uploaderAccountClosed"
	VideoStatusRejectionReasonEnumTrademark                VideoStatusRejectionReasonEnum = "trademark"
	VideoStatusRejectionReasonEnumLegal                    VideoStatusRejectionReasonEnum = "legal"
)

type VideoStatusUploadStatusEnum string

const (
	VideoStatusUploadStatusEnumUploaded  VideoStatusUploadStatusEnum = "uploaded"
	VideoStatusUploadStatusEnumProcessed VideoStatusUploadStatusEnum = "processed"
	VideoStatusUploadStatusEnumFailed    VideoStatusUploadStatusEnum = "failed"
	VideoStatusUploadStatusEnumRejected  VideoStatusUploadStatusEnum = "rejected"
	VideoStatusUploadStatusEnumDeleted   VideoStatusUploadStatusEnum = "deleted"
)

type VideoStatus struct {
	Embeddable              *bool                           `json:"embeddable"`
	FailureReason           *VideoStatusFailureReasonEnum   `json:"failureReason"`
	License                 *VideoStatusLicenseEnum         `json:"license"`
	MadeForKids             *bool                           `json:"madeForKids"`
	PrivacyStatus           *VideoStatusPrivacyStatusEnum   `json:"privacyStatus"`
	PublicStatsViewable     *bool                           `json:"publicStatsViewable"`
	PublishAt               *time.Time                      `json:"publishAt"`
	RejectionReason         *VideoStatusRejectionReasonEnum `json:"rejectionReason"`
	SelfDeclaredMadeForKids *bool                           `json:"selfDeclaredMadeForKids"`
	UploadStatus            *VideoStatusUploadStatusEnum    `json:"uploadStatus"`
}
