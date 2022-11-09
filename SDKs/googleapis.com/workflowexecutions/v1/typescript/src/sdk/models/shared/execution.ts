import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Error } from "./error";
import { Status } from "./status";

export enum ExecutionCallLogLevelEnum {
    CallLogLevelUnspecified = "CALL_LOG_LEVEL_UNSPECIFIED"
,    LogAllCalls = "LOG_ALL_CALLS"
,    LogErrorsOnly = "LOG_ERRORS_ONLY"
}

export enum ExecutionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Cancelled = "CANCELLED"
}


// Execution
/** 
 * A running instance of a [Workflow](/workflows/docs/reference/rest/v1/projects.locations.workflows).
**/
export class Execution extends SpeakeasyBase {
  @Metadata({ data: "json, name=argument" })
  argument?: string;

  @Metadata({ data: "json, name=callLogLevel" })
  callLogLevel?: ExecutionCallLogLevelEnum;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=result" })
  result?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: ExecutionStateEnum;

  @Metadata({ data: "json, name=status" })
  status?: Status;

  @Metadata({ data: "json, name=workflowRevisionId" })
  workflowRevisionId?: string;
}
