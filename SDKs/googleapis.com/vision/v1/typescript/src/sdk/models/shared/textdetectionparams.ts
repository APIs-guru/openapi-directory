import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextDetectionParams
/** 
 * Parameters for text detections. This is used to control TEXT_DETECTION and DOCUMENT_TEXT_DETECTION features.
**/
export class TextDetectionParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advancedOcrOptions" })
  advancedOcrOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=enableTextDetectionConfidenceScore" })
  enableTextDetectionConfidenceScore?: boolean;
}
