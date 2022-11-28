import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VerifyJobRunFailureCauseEnum {
    FailureCauseUnspecified = "FAILURE_CAUSE_UNSPECIFIED",
    CloudBuildUnavailable = "CLOUD_BUILD_UNAVAILABLE",
    ExecutionFailed = "EXECUTION_FAILED",
    DeadlineExceeded = "DEADLINE_EXCEEDED",
    VerificationConfigNotFound = "VERIFICATION_CONFIG_NOT_FOUND"
}
/**
 * VerifyJobRun contains information specific to a verify `JobRun`.
**/
export declare class VerifyJobRun extends SpeakeasyBase {
    artifactUri?: string;
    build?: string;
    eventLogPath?: string;
    failureCause?: VerifyJobRunFailureCauseEnum;
    failureMessage?: string;
}
