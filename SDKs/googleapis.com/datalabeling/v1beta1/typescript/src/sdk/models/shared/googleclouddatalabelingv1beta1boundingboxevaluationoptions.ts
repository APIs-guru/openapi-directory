import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions
/** 
 * Options regarding evaluation between bounding boxes.
**/
export class GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=iouThreshold" })
  iouThreshold?: number;
}
