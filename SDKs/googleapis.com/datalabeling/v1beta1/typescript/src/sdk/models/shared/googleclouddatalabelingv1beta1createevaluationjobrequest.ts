import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1EvaluationJob } from "./googleclouddatalabelingv1beta1evaluationjob";



// GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest
/** 
 * Request message for CreateEvaluationJob.
**/
export class GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=job" })
  job?: GoogleCloudDatalabelingV1beta1EvaluationJob;
}
