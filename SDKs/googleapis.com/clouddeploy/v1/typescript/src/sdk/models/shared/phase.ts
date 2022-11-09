import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeploymentJobs } from "./deploymentjobs";

export enum PhaseStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    InProgress = "IN_PROGRESS"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Aborted = "ABORTED"
}


// Phase
/** 
 * Phase represents a collection of jobs that are logically grouped together for a `Rollout`.
**/
export class Phase extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentJobs" })
  deploymentJobs?: DeploymentJobs;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=state" })
  state?: PhaseStateEnum;
}
