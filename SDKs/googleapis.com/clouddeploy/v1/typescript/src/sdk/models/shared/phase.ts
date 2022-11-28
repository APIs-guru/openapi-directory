import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentJobs } from "./deploymentjobs";


export enum PhaseStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Aborted = "ABORTED"
}


// Phase
/** 
 * Phase represents a collection of jobs that are logically grouped together for a `Rollout`.
**/
export class Phase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentJobs" })
  deploymentJobs?: DeploymentJobs;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: PhaseStateEnum;
}
