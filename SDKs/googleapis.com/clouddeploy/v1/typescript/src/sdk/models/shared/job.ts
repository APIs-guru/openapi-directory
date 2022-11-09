import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum JobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Disabled = "DISABLED"
,    InProgress = "IN_PROGRESS"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Aborted = "ABORTED"
}


// Job
/** 
 * Job represents an operation for a `Rollout`.
**/
export class Job extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployJob" })
  deployJob?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=jobRun" })
  jobRun?: string;

  @Metadata({ data: "json, name=state" })
  state?: JobStateEnum;

  @Metadata({ data: "json, name=verifyJob" })
  verifyJob?: Map<string, any>;
}
