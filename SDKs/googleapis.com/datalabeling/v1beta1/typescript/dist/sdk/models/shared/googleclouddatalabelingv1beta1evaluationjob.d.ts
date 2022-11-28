import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Attempt } from "./googleclouddatalabelingv1beta1attempt";
import { GoogleCloudDatalabelingV1beta1EvaluationJobConfig } from "./googleclouddatalabelingv1beta1evaluationjobconfig";
export declare enum GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Scheduled = "SCHEDULED",
    Running = "RUNNING",
    Paused = "PAUSED",
    Stopped = "STOPPED"
}
/**
 * Defines an evaluation job that runs periodically to generate Evaluations. [Creating an evaluation job](/ml-engine/docs/continuous-evaluation/create-job) is the starting point for using continuous evaluation.
**/
export declare class GoogleCloudDatalabelingV1beta1EvaluationJob extends SpeakeasyBase {
    annotationSpecSet?: string;
    attempts?: GoogleCloudDatalabelingV1beta1Attempt[];
    createTime?: string;
    description?: string;
    evaluationJobConfig?: GoogleCloudDatalabelingV1beta1EvaluationJobConfig;
    labelMissingGroundTruth?: boolean;
    modelVersion?: string;
    name?: string;
    schedule?: string;
    state?: GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum;
}
