import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig
/** 
 * Config for PERSON_DETECTION.
**/
export class GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeAttributes" })
  includeAttributes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeBoundingBoxes" })
  includeBoundingBoxes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includePoseLandmarks" })
  includePoseLandmarks?: boolean;
}
