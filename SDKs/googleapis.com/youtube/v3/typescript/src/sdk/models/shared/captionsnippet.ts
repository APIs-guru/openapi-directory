import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CaptionSnippetAudioTrackTypeEnum {
    Unknown = "unknown",
    Primary = "primary",
    Commentary = "commentary",
    Descriptive = "descriptive"
}

export enum CaptionSnippetFailureReasonEnum {
    UnknownFormat = "unknownFormat",
    UnsupportedFormat = "unsupportedFormat",
    ProcessingFailed = "processingFailed"
}

export enum CaptionSnippetStatusEnum {
    Serving = "serving",
    Syncing = "syncing",
    Failed = "failed"
}

export enum CaptionSnippetTrackKindEnum {
    Standard = "standard",
    Asr = "ASR",
    Forced = "forced"
}


// CaptionSnippet
/** 
 * Basic details about a caption track, such as its language and name.
**/
export class CaptionSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioTrackType" })
  audioTrackType?: CaptionSnippetAudioTrackTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: CaptionSnippetFailureReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=isAutoSynced" })
  isAutoSynced?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isCC" })
  isCc?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isDraft" })
  isDraft?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isEasyReader" })
  isEasyReader?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isLarge" })
  isLarge?: boolean;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CaptionSnippetStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=trackKind" })
  trackKind?: CaptionSnippetTrackKindEnum;

  @SpeakeasyMetadata({ data: "json, name=videoId" })
  videoId?: string;
}
