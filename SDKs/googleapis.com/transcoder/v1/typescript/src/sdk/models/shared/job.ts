import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobConfig } from "./jobconfig";
import { Status } from "./status";

export enum JobStateEnum {
    ProcessingStateUnspecified = "PROCESSING_STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Running = "RUNNING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
}


// Job
/** 
 * Transcoding job resource.
**/
export class Job extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: JobConfig;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=inputUri" })
  inputUri?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=outputUri" })
  outputUri?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: JobStateEnum;

  @Metadata({ data: "json, name=templateId" })
  templateId?: string;

  @Metadata({ data: "json, name=ttlAfterCompletionDays" })
  ttlAfterCompletionDays?: number;
}
