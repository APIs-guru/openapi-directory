import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Attempt } from "./googleclouddatalabelingv1beta1attempt";
import { GoogleCloudDatalabelingV1beta1EvaluationJobConfig } from "./googleclouddatalabelingv1beta1evaluationjobconfig";


export enum GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Scheduled = "SCHEDULED",
    Running = "RUNNING",
    Paused = "PAUSED",
    Stopped = "STOPPED"
}


// GoogleCloudDatalabelingV1beta1EvaluationJob
/** 
 * Defines an evaluation job that runs periodically to generate Evaluations. [Creating an evaluation job](/ml-engine/docs/continuous-evaluation/create-job) is the starting point for using continuous evaluation.
**/
export class GoogleCloudDatalabelingV1beta1EvaluationJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: string;

  @SpeakeasyMetadata({ data: "json, name=attempts", elemType: GoogleCloudDatalabelingV1beta1Attempt })
  attempts?: GoogleCloudDatalabelingV1beta1Attempt[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=evaluationJobConfig" })
  evaluationJobConfig?: GoogleCloudDatalabelingV1beta1EvaluationJobConfig;

  @SpeakeasyMetadata({ data: "json, name=labelMissingGroundTruth" })
  labelMissingGroundTruth?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modelVersion" })
  modelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum;
}
