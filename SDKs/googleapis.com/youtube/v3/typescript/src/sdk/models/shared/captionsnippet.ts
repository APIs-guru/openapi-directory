import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CaptionSnippetAudioTrackTypeEnum {
    Unknown = "unknown"
,    Primary = "primary"
,    Commentary = "commentary"
,    Descriptive = "descriptive"
}

export enum CaptionSnippetFailureReasonEnum {
    UnknownFormat = "unknownFormat"
,    UnsupportedFormat = "unsupportedFormat"
,    ProcessingFailed = "processingFailed"
}

export enum CaptionSnippetStatusEnum {
    Serving = "serving"
,    Syncing = "syncing"
,    Failed = "failed"
}

export enum CaptionSnippetTrackKindEnum {
    Standard = "standard"
,    Asr = "ASR"
,    Forced = "forced"
}


// CaptionSnippet
/** 
 * Basic details about a caption track, such as its language and name.
**/
export class CaptionSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioTrackType" })
  audioTrackType?: CaptionSnippetAudioTrackTypeEnum;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: CaptionSnippetFailureReasonEnum;

  @Metadata({ data: "json, name=isAutoSynced" })
  isAutoSynced?: boolean;

  @Metadata({ data: "json, name=isCC" })
  isCc?: boolean;

  @Metadata({ data: "json, name=isDraft" })
  isDraft?: boolean;

  @Metadata({ data: "json, name=isEasyReader" })
  isEasyReader?: boolean;

  @Metadata({ data: "json, name=isLarge" })
  isLarge?: boolean;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=lastUpdated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: CaptionSnippetStatusEnum;

  @Metadata({ data: "json, name=trackKind" })
  trackKind?: CaptionSnippetTrackKindEnum;

  @Metadata({ data: "json, name=videoId" })
  videoId?: string;
}
