package shared

import (
"time")


type VideoStatusFailureReasonEnum string

const (
    VideoStatusFailureReasonEnumConversion VideoStatusFailureReasonEnum = "conversion"
VideoStatusFailureReasonEnumInvalidFile VideoStatusFailureReasonEnum = "invalidFile"
VideoStatusFailureReasonEnumEmptyFile VideoStatusFailureReasonEnum = "emptyFile"
VideoStatusFailureReasonEnumTooSmall VideoStatusFailureReasonEnum = "tooSmall"
VideoStatusFailureReasonEnumCodec VideoStatusFailureReasonEnum = "codec"
VideoStatusFailureReasonEnumUploadAborted VideoStatusFailureReasonEnum = "uploadAborted"
)



type VideoStatusLicenseEnum string

const (
    VideoStatusLicenseEnumYoutube VideoStatusLicenseEnum = "youtube"
VideoStatusLicenseEnumCreativeCommon VideoStatusLicenseEnum = "creativeCommon"
)



type VideoStatusPrivacyStatusEnum string

const (
    VideoStatusPrivacyStatusEnumPublic VideoStatusPrivacyStatusEnum = "public"
VideoStatusPrivacyStatusEnumUnlisted VideoStatusPrivacyStatusEnum = "unlisted"
VideoStatusPrivacyStatusEnumPrivate VideoStatusPrivacyStatusEnum = "private"
)



type VideoStatusRejectionReasonEnum string

const (
    VideoStatusRejectionReasonEnumCopyright VideoStatusRejectionReasonEnum = "copyright"
VideoStatusRejectionReasonEnumInappropriate VideoStatusRejectionReasonEnum = "inappropriate"
VideoStatusRejectionReasonEnumDuplicate VideoStatusRejectionReasonEnum = "duplicate"
VideoStatusRejectionReasonEnumTermsOfUse VideoStatusRejectionReasonEnum = "termsOfUse"
VideoStatusRejectionReasonEnumUploaderAccountSuspended VideoStatusRejectionReasonEnum = "uploaderAccountSuspended"
VideoStatusRejectionReasonEnumLength VideoStatusRejectionReasonEnum = "length"
VideoStatusRejectionReasonEnumClaim VideoStatusRejectionReasonEnum = "claim"
VideoStatusRejectionReasonEnumUploaderAccountClosed VideoStatusRejectionReasonEnum = "uploaderAccountClosed"
VideoStatusRejectionReasonEnumTrademark VideoStatusRejectionReasonEnum = "trademark"
VideoStatusRejectionReasonEnumLegal VideoStatusRejectionReasonEnum = "legal"
)



type VideoStatusUploadStatusEnum string

const (
    VideoStatusUploadStatusEnumUploaded VideoStatusUploadStatusEnum = "uploaded"
VideoStatusUploadStatusEnumProcessed VideoStatusUploadStatusEnum = "processed"
VideoStatusUploadStatusEnumFailed VideoStatusUploadStatusEnum = "failed"
VideoStatusUploadStatusEnumRejected VideoStatusUploadStatusEnum = "rejected"
VideoStatusUploadStatusEnumDeleted VideoStatusUploadStatusEnum = "deleted"
)


type VideoStatus struct {
    Embeddable *bool `json:"embeddable,omitempty"`
    FailureReason *VideoStatusFailureReasonEnum `json:"failureReason,omitempty"`
    License *VideoStatusLicenseEnum `json:"license,omitempty"`
    MadeForKids *bool `json:"madeForKids,omitempty"`
    PrivacyStatus *VideoStatusPrivacyStatusEnum `json:"privacyStatus,omitempty"`
    PublicStatsViewable *bool `json:"publicStatsViewable,omitempty"`
    PublishAt *time.Time `json:"publishAt,omitempty"`
    RejectionReason *VideoStatusRejectionReasonEnum `json:"rejectionReason,omitempty"`
    SelfDeclaredMadeForKids *bool `json:"selfDeclaredMadeForKids,omitempty"`
    UploadStatus *VideoStatusUploadStatusEnum `json:"uploadStatus,omitempty"`
    
}

