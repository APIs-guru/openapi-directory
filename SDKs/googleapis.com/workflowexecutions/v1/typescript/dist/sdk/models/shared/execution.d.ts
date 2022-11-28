import { SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";
import { Status } from "./status";
export declare enum ExecutionCallLogLevelEnum {
    CallLogLevelUnspecified = "CALL_LOG_LEVEL_UNSPECIFIED",
    LogAllCalls = "LOG_ALL_CALLS",
    LogErrorsOnly = "LOG_ERRORS_ONLY"
}
export declare enum ExecutionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED"
}
/**
 * A running instance of a [Workflow](/workflows/docs/reference/rest/v1/projects.locations.workflows).
**/
export declare class Execution extends SpeakeasyBase {
    argument?: string;
    callLogLevel?: ExecutionCallLogLevelEnum;
    endTime?: string;
    error?: Error;
    name?: string;
    result?: string;
    startTime?: string;
    state?: ExecutionStateEnum;
    status?: Status;
    workflowRevisionId?: string;
}
/**
 * A running instance of a [Workflow](/workflows/docs/reference/rest/v1/projects.locations.workflows).
**/
export declare class ExecutionInput extends SpeakeasyBase {
    argument?: string;
    callLogLevel?: ExecutionCallLogLevelEnum;
    error?: Error;
    status?: Status;
}
