import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CaptionSnippetAudioTrackTypeEnum {
    Unknown = "unknown",
    Primary = "primary",
    Commentary = "commentary",
    Descriptive = "descriptive"
}
export declare enum CaptionSnippetFailureReasonEnum {
    UnknownFormat = "unknownFormat",
    UnsupportedFormat = "unsupportedFormat",
    ProcessingFailed = "processingFailed"
}
export declare enum CaptionSnippetStatusEnum {
    Serving = "serving",
    Syncing = "syncing",
    Failed = "failed"
}
export declare enum CaptionSnippetTrackKindEnum {
    Standard = "standard",
    Asr = "ASR",
    Forced = "forced"
}
/**
 * Basic details about a caption track, such as its language and name.
**/
export declare class CaptionSnippet extends SpeakeasyBase {
    audioTrackType?: CaptionSnippetAudioTrackTypeEnum;
    failureReason?: CaptionSnippetFailureReasonEnum;
    isAutoSynced?: boolean;
    isCc?: boolean;
    isDraft?: boolean;
    isEasyReader?: boolean;
    isLarge?: boolean;
    language?: string;
    lastUpdated?: Date;
    name?: string;
    status?: CaptionSnippetStatusEnum;
    trackKind?: CaptionSnippetTrackKindEnum;
    videoId?: string;
}
