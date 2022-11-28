import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VerifyJobRunFailureCauseEnum {
    FailureCauseUnspecified = "FAILURE_CAUSE_UNSPECIFIED",
    CloudBuildUnavailable = "CLOUD_BUILD_UNAVAILABLE",
    ExecutionFailed = "EXECUTION_FAILED",
    DeadlineExceeded = "DEADLINE_EXCEEDED",
    VerificationConfigNotFound = "VERIFICATION_CONFIG_NOT_FOUND"
}


// VerifyJobRun
/** 
 * VerifyJobRun contains information specific to a verify `JobRun`.
**/
export class VerifyJobRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactUri" })
  artifactUri?: string;

  @SpeakeasyMetadata({ data: "json, name=build" })
  build?: string;

  @SpeakeasyMetadata({ data: "json, name=eventLogPath" })
  eventLogPath?: string;

  @SpeakeasyMetadata({ data: "json, name=failureCause" })
  failureCause?: VerifyJobRunFailureCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=failureMessage" })
  failureMessage?: string;
}
