import { SpeakeasyBase } from "../../../internal/utils";
import { VideoProcessingDetailsProcessingProgress } from "./videoprocessingdetailsprocessingprogress";
export declare enum VideoProcessingDetailsProcessingFailureReasonEnum {
    UploadFailed = "uploadFailed",
    TranscodeFailed = "transcodeFailed",
    StreamingFailed = "streamingFailed",
    Other = "other"
}
export declare enum VideoProcessingDetailsProcessingStatusEnum {
    Processing = "processing",
    Succeeded = "succeeded",
    Failed = "failed",
    Terminated = "terminated"
}
/**
 * Describes processing status and progress and availability of some other Video resource parts.
**/
export declare class VideoProcessingDetails extends SpeakeasyBase {
    editorSuggestionsAvailability?: string;
    fileDetailsAvailability?: string;
    processingFailureReason?: VideoProcessingDetailsProcessingFailureReasonEnum;
    processingIssuesAvailability?: string;
    processingProgress?: VideoProcessingDetailsProcessingProgress;
    processingStatus?: VideoProcessingDetailsProcessingStatusEnum;
    tagSuggestionsAvailability?: string;
    thumbnailsAvailability?: string;
}
