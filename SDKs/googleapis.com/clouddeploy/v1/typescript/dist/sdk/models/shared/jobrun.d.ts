import { SpeakeasyBase } from "../../../internal/utils";
import { DeployJobRun } from "./deployjobrun";
import { VerifyJobRun } from "./verifyjobrun";
export declare enum JobRunStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
/**
 * A `JobRun` resource in the Google Cloud Deploy API. A `JobRun` contains information of a single `Rollout` job evaluation.
**/
export declare class JobRun extends SpeakeasyBase {
    createTime?: string;
    deployJobRun?: DeployJobRun;
    endTime?: string;
    etag?: string;
    jobId?: string;
    name?: string;
    phaseId?: string;
    startTime?: string;
    state?: JobRunStateEnum;
    uid?: string;
    verifyJobRun?: VerifyJobRun;
}
