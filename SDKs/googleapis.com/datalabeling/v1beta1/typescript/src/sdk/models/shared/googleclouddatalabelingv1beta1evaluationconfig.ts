import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions } from "./googleclouddatalabelingv1beta1boundingboxevaluationoptions";


// GoogleCloudDatalabelingV1beta1EvaluationConfig
/** 
 * Configuration details used for calculating evaluation metrics and creating an Evaluation.
**/
export class GoogleCloudDatalabelingV1beta1EvaluationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingBoxEvaluationOptions" })
  boundingBoxEvaluationOptions?: GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions;
}
