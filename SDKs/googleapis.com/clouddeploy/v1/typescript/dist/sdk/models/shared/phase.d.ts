import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentJobs } from "./deploymentjobs";
export declare enum PhaseStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Aborted = "ABORTED"
}
/**
 * Phase represents a collection of jobs that are logically grouped together for a `Rollout`.
**/
export declare class Phase extends SpeakeasyBase {
    deploymentJobs?: DeploymentJobs;
    id?: string;
    state?: PhaseStateEnum;
}
