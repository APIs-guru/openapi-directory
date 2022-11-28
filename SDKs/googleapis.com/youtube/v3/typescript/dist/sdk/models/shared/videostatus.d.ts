import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VideoStatusFailureReasonEnum {
    Conversion = "conversion",
    InvalidFile = "invalidFile",
    EmptyFile = "emptyFile",
    TooSmall = "tooSmall",
    Codec = "codec",
    UploadAborted = "uploadAborted"
}
export declare enum VideoStatusLicenseEnum {
    Youtube = "youtube",
    CreativeCommon = "creativeCommon"
}
export declare enum VideoStatusPrivacyStatusEnum {
    Public = "public",
    Unlisted = "unlisted",
    Private = "private"
}
export declare enum VideoStatusRejectionReasonEnum {
    Copyright = "copyright",
    Inappropriate = "inappropriate",
    Duplicate = "duplicate",
    TermsOfUse = "termsOfUse",
    UploaderAccountSuspended = "uploaderAccountSuspended",
    Length = "length",
    Claim = "claim",
    UploaderAccountClosed = "uploaderAccountClosed",
    Trademark = "trademark",
    Legal = "legal"
}
export declare enum VideoStatusUploadStatusEnum {
    Uploaded = "uploaded",
    Processed = "processed",
    Failed = "failed",
    Rejected = "rejected",
    Deleted = "deleted"
}
/**
 * Basic details about a video category, such as its localized title. Next Id: 18
**/
export declare class VideoStatus extends SpeakeasyBase {
    embeddable?: boolean;
    failureReason?: VideoStatusFailureReasonEnum;
    license?: VideoStatusLicenseEnum;
    madeForKids?: boolean;
    privacyStatus?: VideoStatusPrivacyStatusEnum;
    publicStatsViewable?: boolean;
    publishAt?: Date;
    rejectionReason?: VideoStatusRejectionReasonEnum;
    selfDeclaredMadeForKids?: boolean;
    uploadStatus?: VideoStatusUploadStatusEnum;
}
