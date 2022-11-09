import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig
/** 
 * Config for PERSON_DETECTION.
**/
export class GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeAttributes" })
  includeAttributes?: boolean;

  @Metadata({ data: "json, name=includeBoundingBoxes" })
  includeBoundingBoxes?: boolean;

  @Metadata({ data: "json, name=includePoseLandmarks" })
  includePoseLandmarks?: boolean;
}
