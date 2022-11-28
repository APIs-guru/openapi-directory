import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VideoStatusFailureReasonEnum {
    Conversion = "conversion",
    InvalidFile = "invalidFile",
    EmptyFile = "emptyFile",
    TooSmall = "tooSmall",
    Codec = "codec",
    UploadAborted = "uploadAborted"
}

export enum VideoStatusLicenseEnum {
    Youtube = "youtube",
    CreativeCommon = "creativeCommon"
}

export enum VideoStatusPrivacyStatusEnum {
    Public = "public",
    Unlisted = "unlisted",
    Private = "private"
}

export enum VideoStatusRejectionReasonEnum {
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

export enum VideoStatusUploadStatusEnum {
    Uploaded = "uploaded",
    Processed = "processed",
    Failed = "failed",
    Rejected = "rejected",
    Deleted = "deleted"
}


// VideoStatus
/** 
 * Basic details about a video category, such as its localized title. Next Id: 18
**/
export class VideoStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=embeddable" })
  embeddable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: VideoStatusFailureReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: VideoStatusLicenseEnum;

  @SpeakeasyMetadata({ data: "json, name=madeForKids" })
  madeForKids?: boolean;

  @SpeakeasyMetadata({ data: "json, name=privacyStatus" })
  privacyStatus?: VideoStatusPrivacyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=publicStatsViewable" })
  publicStatsViewable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publishAt" })
  publishAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=rejectionReason" })
  rejectionReason?: VideoStatusRejectionReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=selfDeclaredMadeForKids" })
  selfDeclaredMadeForKids?: boolean;

  @SpeakeasyMetadata({ data: "json, name=uploadStatus" })
  uploadStatus?: VideoStatusUploadStatusEnum;
}
