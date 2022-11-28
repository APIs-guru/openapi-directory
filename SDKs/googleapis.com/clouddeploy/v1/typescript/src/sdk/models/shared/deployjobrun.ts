import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeployJobRunMetadata } from "./deployjobrunmetadata";


export enum DeployJobRunFailureCauseEnum {
    FailureCauseUnspecified = "FAILURE_CAUSE_UNSPECIFIED",
    CloudBuildUnavailable = "CLOUD_BUILD_UNAVAILABLE",
    ExecutionFailed = "EXECUTION_FAILED",
    DeadlineExceeded = "DEADLINE_EXCEEDED"
}


// DeployJobRun
/** 
 * DeployJobRun contains information specific to a deploy `JobRun`.
**/
export class DeployJobRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=build" })
  build?: string;

  @SpeakeasyMetadata({ data: "json, name=failureCause" })
  failureCause?: DeployJobRunFailureCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=failureMessage" })
  failureMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: DeployJobRunMetadata;
}
