import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1EvaluationJob } from "./googleclouddatalabelingv1beta1evaluationjob";


// GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse
/** 
 * Results for listing evaluation jobs.
**/
export class GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=evaluationJobs", elemType: shared.GoogleCloudDatalabelingV1beta1EvaluationJob })
  evaluationJobs?: GoogleCloudDatalabelingV1beta1EvaluationJob[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
