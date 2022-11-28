import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions
/** 
 * Options regarding evaluation between bounding boxes.
**/
export class GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iouThreshold" })
  iouThreshold?: number;
}
