import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1EvaluationJob } from "./googleclouddatalabelingv1beta1evaluationjob";



// GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse
/** 
 * Results for listing evaluation jobs.
**/
export class GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evaluationJobs", elemType: GoogleCloudDatalabelingV1beta1EvaluationJob })
  evaluationJobs?: GoogleCloudDatalabelingV1beta1EvaluationJob[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
