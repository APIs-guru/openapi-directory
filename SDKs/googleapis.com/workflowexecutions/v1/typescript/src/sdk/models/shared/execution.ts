import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { Status } from "./status";


export enum ExecutionCallLogLevelEnum {
    CallLogLevelUnspecified = "CALL_LOG_LEVEL_UNSPECIFIED",
    LogAllCalls = "LOG_ALL_CALLS",
    LogErrorsOnly = "LOG_ERRORS_ONLY"
}

export enum ExecutionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED"
}


// Execution
/** 
 * A running instance of a [Workflow](/workflows/docs/reference/rest/v1/projects.locations.workflows).
**/
export class Execution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=argument" })
  argument?: string;

  @SpeakeasyMetadata({ data: "json, name=callLogLevel" })
  callLogLevel?: ExecutionCallLogLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ExecutionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Status;

  @SpeakeasyMetadata({ data: "json, name=workflowRevisionId" })
  workflowRevisionId?: string;
}


// ExecutionInput
/** 
 * A running instance of a [Workflow](/workflows/docs/reference/rest/v1/projects.locations.workflows).
**/
export class ExecutionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=argument" })
  argument?: string;

  @SpeakeasyMetadata({ data: "json, name=callLogLevel" })
  callLogLevel?: ExecutionCallLogLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Status;
}
