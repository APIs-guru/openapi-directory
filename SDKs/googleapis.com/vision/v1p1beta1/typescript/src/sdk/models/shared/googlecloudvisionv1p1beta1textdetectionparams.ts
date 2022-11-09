import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudVisionV1p1beta1TextDetectionParams
/** 
 * Parameters for text detections. This is used to control TEXT_DETECTION and DOCUMENT_TEXT_DETECTION features.
**/
export class GoogleCloudVisionV1p1beta1TextDetectionParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=advancedOcrOptions" })
  advancedOcrOptions?: string[];

  @Metadata({ data: "json, name=enableTextDetectionConfidenceScore" })
  enableTextDetectionConfidenceScore?: boolean;
}
