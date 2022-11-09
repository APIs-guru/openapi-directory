import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1Attempt } from "./googleclouddatalabelingv1beta1attempt";
import { GoogleCloudDatalabelingV1beta1EvaluationJobConfig } from "./googleclouddatalabelingv1beta1evaluationjobconfig";

export enum GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Scheduled = "SCHEDULED"
,    Running = "RUNNING"
,    Paused = "PAUSED"
,    Stopped = "STOPPED"
}


// GoogleCloudDatalabelingV1beta1EvaluationJob
/** 
 * Defines an evaluation job that runs periodically to generate Evaluations. [Creating an evaluation job](/ml-engine/docs/continuous-evaluation/create-job) is the starting point for using continuous evaluation.
**/
export class GoogleCloudDatalabelingV1beta1EvaluationJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: string;

  @Metadata({ data: "json, name=attempts", elemType: shared.GoogleCloudDatalabelingV1beta1Attempt })
  attempts?: GoogleCloudDatalabelingV1beta1Attempt[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=evaluationJobConfig" })
  evaluationJobConfig?: GoogleCloudDatalabelingV1beta1EvaluationJobConfig;

  @Metadata({ data: "json, name=labelMissingGroundTruth" })
  labelMissingGroundTruth?: boolean;

  @Metadata({ data: "json, name=modelVersion" })
  modelVersion?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=schedule" })
  schedule?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum;
}
