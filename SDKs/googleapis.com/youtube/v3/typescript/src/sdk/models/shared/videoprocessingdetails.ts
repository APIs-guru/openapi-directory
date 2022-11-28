import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoProcessingDetailsProcessingProgress } from "./videoprocessingdetailsprocessingprogress";


export enum VideoProcessingDetailsProcessingFailureReasonEnum {
    UploadFailed = "uploadFailed",
    TranscodeFailed = "transcodeFailed",
    StreamingFailed = "streamingFailed",
    Other = "other"
}

export enum VideoProcessingDetailsProcessingStatusEnum {
    Processing = "processing",
    Succeeded = "succeeded",
    Failed = "failed",
    Terminated = "terminated"
}


// VideoProcessingDetails
/** 
 * Describes processing status and progress and availability of some other Video resource parts.
**/
export class VideoProcessingDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=editorSuggestionsAvailability" })
  editorSuggestionsAvailability?: string;

  @SpeakeasyMetadata({ data: "json, name=fileDetailsAvailability" })
  fileDetailsAvailability?: string;

  @SpeakeasyMetadata({ data: "json, name=processingFailureReason" })
  processingFailureReason?: VideoProcessingDetailsProcessingFailureReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=processingIssuesAvailability" })
  processingIssuesAvailability?: string;

  @SpeakeasyMetadata({ data: "json, name=processingProgress" })
  processingProgress?: VideoProcessingDetailsProcessingProgress;

  @SpeakeasyMetadata({ data: "json, name=processingStatus" })
  processingStatus?: VideoProcessingDetailsProcessingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tagSuggestionsAvailability" })
  tagSuggestionsAvailability?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailsAvailability" })
  thumbnailsAvailability?: string;
}
