import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TextDetectionParams
/** 
 * Parameters for text detections. This is used to control TEXT_DETECTION and DOCUMENT_TEXT_DETECTION features.
**/
export class TextDetectionParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=advancedOcrOptions" })
  advancedOcrOptions?: string[];

  @Metadata({ data: "json, name=enableTextDetectionConfidenceScore" })
  enableTextDetectionConfidenceScore?: boolean;
}
