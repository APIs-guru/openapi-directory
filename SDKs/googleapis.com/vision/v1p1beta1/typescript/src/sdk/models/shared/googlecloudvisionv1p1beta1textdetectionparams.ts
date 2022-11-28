import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVisionV1p1beta1TextDetectionParams
/** 
 * Parameters for text detections. This is used to control TEXT_DETECTION and DOCUMENT_TEXT_DETECTION features.
**/
export class GoogleCloudVisionV1p1beta1TextDetectionParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advancedOcrOptions" })
  advancedOcrOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=enableTextDetectionConfidenceScore" })
  enableTextDetectionConfidenceScore?: boolean;
}
