import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeployJobRun } from "./deployjobrun";
import { VerifyJobRun } from "./verifyjobrun";


export enum JobRunStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}


// JobRun
/** 
 * A `JobRun` resource in the Google Cloud Deploy API. A `JobRun` contains information of a single `Rollout` job evaluation.
**/
export class JobRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deployJobRun" })
  deployJobRun?: DeployJobRun;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phaseId" })
  phaseId?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: JobRunStateEnum;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=verifyJobRun" })
  verifyJobRun?: VerifyJobRun;
}
