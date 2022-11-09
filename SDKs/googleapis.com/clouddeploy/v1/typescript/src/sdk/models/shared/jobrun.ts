import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeployJobRun } from "./deployjobrun";
import { VerifyJobRun } from "./verifyjobrun";

export enum JobRunStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    InProgress = "IN_PROGRESS"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
}


// JobRun
/** 
 * A `JobRun` resource in the Google Cloud Deploy API. A `JobRun` contains information of a single `Rollout` job evaluation.
**/
export class JobRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deployJobRun" })
  deployJobRun?: DeployJobRun;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phaseId" })
  phaseId?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: JobRunStateEnum;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=verifyJobRun" })
  verifyJobRun?: VerifyJobRun;
}
