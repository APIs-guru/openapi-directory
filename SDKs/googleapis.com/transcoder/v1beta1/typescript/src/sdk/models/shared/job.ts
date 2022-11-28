import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobConfig } from "./jobconfig";
import { OriginUri } from "./originuri";
import { Progress } from "./progress";
import { FailureDetail } from "./failuredetail";


export enum JobStateEnum {
    ProcessingStateUnspecified = "PROCESSING_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}


// JobInput
/** 
 * Transcoding job resource.
**/
export class JobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: JobConfig;

  @SpeakeasyMetadata({ data: "json, name=inputUri" })
  inputUri?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=originUri" })
  originUri?: OriginUri;

  @SpeakeasyMetadata({ data: "json, name=outputUri" })
  outputUri?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress?: Progress;

  @SpeakeasyMetadata({ data: "json, name=templateId" })
  templateId?: string;

  @SpeakeasyMetadata({ data: "json, name=ttlAfterCompletionDays" })
  ttlAfterCompletionDays?: number;
}


// Job
/** 
 * Transcoding job resource.
**/
export class Job extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: JobConfig;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=failureDetails", elemType: FailureDetail })
  failureDetails?: FailureDetail[];

  @SpeakeasyMetadata({ data: "json, name=failureReason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=inputUri" })
  inputUri?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=originUri" })
  originUri?: OriginUri;

  @SpeakeasyMetadata({ data: "json, name=outputUri" })
  outputUri?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress?: Progress;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: JobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=templateId" })
  templateId?: string;

  @SpeakeasyMetadata({ data: "json, name=ttlAfterCompletionDays" })
  ttlAfterCompletionDays?: number;
}
