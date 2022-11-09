import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeployJobRunMetadata } from "./deployjobrunmetadata";

export enum DeployJobRunFailureCauseEnum {
    FailureCauseUnspecified = "FAILURE_CAUSE_UNSPECIFIED"
,    CloudBuildUnavailable = "CLOUD_BUILD_UNAVAILABLE"
,    ExecutionFailed = "EXECUTION_FAILED"
,    DeadlineExceeded = "DEADLINE_EXCEEDED"
}


// DeployJobRun
/** 
 * DeployJobRun contains information specific to a deploy `JobRun`.
**/
export class DeployJobRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=build" })
  build?: string;

  @Metadata({ data: "json, name=failureCause" })
  failureCause?: DeployJobRunFailureCauseEnum;

  @Metadata({ data: "json, name=failureMessage" })
  failureMessage?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: DeployJobRunMetadata;
}
