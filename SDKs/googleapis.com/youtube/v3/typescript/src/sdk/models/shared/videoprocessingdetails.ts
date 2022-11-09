import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VideoProcessingDetailsProcessingProgress } from "./videoprocessingdetailsprocessingprogress";

export enum VideoProcessingDetailsProcessingFailureReasonEnum {
    UploadFailed = "uploadFailed"
,    TranscodeFailed = "transcodeFailed"
,    StreamingFailed = "streamingFailed"
,    Other = "other"
}

export enum VideoProcessingDetailsProcessingStatusEnum {
    Processing = "processing"
,    Succeeded = "succeeded"
,    Failed = "failed"
,    Terminated = "terminated"
}


// VideoProcessingDetails
/** 
 * Describes processing status and progress and availability of some other Video resource parts.
**/
export class VideoProcessingDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=editorSuggestionsAvailability" })
  editorSuggestionsAvailability?: string;

  @Metadata({ data: "json, name=fileDetailsAvailability" })
  fileDetailsAvailability?: string;

  @Metadata({ data: "json, name=processingFailureReason" })
  processingFailureReason?: VideoProcessingDetailsProcessingFailureReasonEnum;

  @Metadata({ data: "json, name=processingIssuesAvailability" })
  processingIssuesAvailability?: string;

  @Metadata({ data: "json, name=processingProgress" })
  processingProgress?: VideoProcessingDetailsProcessingProgress;

  @Metadata({ data: "json, name=processingStatus" })
  processingStatus?: VideoProcessingDetailsProcessingStatusEnum;

  @Metadata({ data: "json, name=tagSuggestionsAvailability" })
  tagSuggestionsAvailability?: string;

  @Metadata({ data: "json, name=thumbnailsAvailability" })
  thumbnailsAvailability?: string;
}
