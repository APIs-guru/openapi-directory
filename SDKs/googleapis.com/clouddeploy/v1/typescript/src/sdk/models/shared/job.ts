import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum JobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Disabled = "DISABLED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Aborted = "ABORTED"
}


// Job
/** 
 * Job represents an operation for a `Rollout`.
**/
export class Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployJob" })
  deployJob?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=jobRun" })
  jobRun?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: JobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=verifyJob" })
  verifyJob?: Map<string, any>;
}
