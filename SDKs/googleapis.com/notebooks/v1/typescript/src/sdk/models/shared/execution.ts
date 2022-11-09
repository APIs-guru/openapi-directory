import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionTemplate } from "./executiontemplate";

export enum ExecutionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Queued = "QUEUED"
,    Preparing = "PREPARING"
,    Running = "RUNNING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Cancelling = "CANCELLING"
,    Cancelled = "CANCELLED"
,    Expired = "EXPIRED"
,    Initializing = "INITIALIZING"
}


// Execution
/** 
 * The definition of a single executed notebook.
**/
export class Execution extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=executionTemplate" })
  executionTemplate?: ExecutionTemplate;

  @Metadata({ data: "json, name=jobUri" })
  jobUri?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=outputNotebookFile" })
  outputNotebookFile?: string;

  @Metadata({ data: "json, name=state" })
  state?: ExecutionStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
