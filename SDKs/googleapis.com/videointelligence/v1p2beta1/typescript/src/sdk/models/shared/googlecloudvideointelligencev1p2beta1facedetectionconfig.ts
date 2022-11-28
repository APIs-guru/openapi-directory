import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig
/** 
 * Config for FACE_DETECTION.
**/
export class GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeAttributes" })
  includeAttributes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeBoundingBoxes" })
  includeBoundingBoxes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;
}
