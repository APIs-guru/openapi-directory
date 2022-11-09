import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig
/** 
 * Config for FACE_DETECTION.
**/
export class GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeAttributes" })
  includeAttributes?: boolean;

  @Metadata({ data: "json, name=includeBoundingBoxes" })
  includeBoundingBoxes?: boolean;

  @Metadata({ data: "json, name=model" })
  model?: string;
}
