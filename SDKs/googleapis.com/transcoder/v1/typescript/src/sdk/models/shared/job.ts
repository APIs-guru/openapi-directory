import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobConfig } from "./jobconfig";
import { Status } from "./status";


export enum JobStateEnum {
    ProcessingStateUnspecified = "PROCESSING_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
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

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=inputUri" })
  inputUri?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outputUri" })
  outputUri?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: JobStateEnum;

  @SpeakeasyMetadata({ data: "json, name=templateId" })
  templateId?: string;

  @SpeakeasyMetadata({ data: "json, name=ttlAfterCompletionDays" })
  ttlAfterCompletionDays?: number;
}


// JobInput
/** 
 * Transcoding job resource.
**/
export class JobInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: JobConfig;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=inputUri" })
  inputUri?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outputUri" })
  outputUri?: string;

  @SpeakeasyMetadata({ data: "json, name=templateId" })
  templateId?: string;

  @SpeakeasyMetadata({ data: "json, name=ttlAfterCompletionDays" })
  ttlAfterCompletionDays?: number;
}
