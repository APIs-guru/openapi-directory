import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionTemplate } from "./executiontemplate";


export enum ExecutionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Queued = "QUEUED",
    Preparing = "PREPARING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelling = "CANCELLING",
    Cancelled = "CANCELLED",
    Expired = "EXPIRED",
    Initializing = "INITIALIZING"
}


// ExecutionInput
/** 
 * The definition of a single executed notebook.
**/
export class ExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=executionTemplate" })
  executionTemplate?: ExecutionTemplate;

  @SpeakeasyMetadata({ data: "json, name=outputNotebookFile" })
  outputNotebookFile?: string;
}


// Execution
/** 
 * The definition of a single executed notebook.
**/
export class Execution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=executionTemplate" })
  executionTemplate?: ExecutionTemplate;

  @SpeakeasyMetadata({ data: "json, name=jobUri" })
  jobUri?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outputNotebookFile" })
  outputNotebookFile?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ExecutionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
