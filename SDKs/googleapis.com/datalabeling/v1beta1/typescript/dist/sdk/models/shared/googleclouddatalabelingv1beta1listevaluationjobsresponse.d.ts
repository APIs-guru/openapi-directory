import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1EvaluationJob } from "./googleclouddatalabelingv1beta1evaluationjob";
/**
 * Results for listing evaluation jobs.
**/
export declare class GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse extends SpeakeasyBase {
    evaluationJobs?: GoogleCloudDatalabelingV1beta1EvaluationJob[];
    nextPageToken?: string;
}
