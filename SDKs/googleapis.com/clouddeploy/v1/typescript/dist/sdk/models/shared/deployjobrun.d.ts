import { SpeakeasyBase } from "../../../internal/utils";
import { DeployJobRunMetadata } from "./deployjobrunmetadata";
export declare enum DeployJobRunFailureCauseEnum {
    FailureCauseUnspecified = "FAILURE_CAUSE_UNSPECIFIED",
    CloudBuildUnavailable = "CLOUD_BUILD_UNAVAILABLE",
    ExecutionFailed = "EXECUTION_FAILED",
    DeadlineExceeded = "DEADLINE_EXCEEDED"
}
/**
 * DeployJobRun contains information specific to a deploy `JobRun`.
**/
export declare class DeployJobRun extends SpeakeasyBase {
    build?: string;
    failureCause?: DeployJobRunFailureCauseEnum;
    failureMessage?: string;
    metadata?: DeployJobRunMetadata;
}
