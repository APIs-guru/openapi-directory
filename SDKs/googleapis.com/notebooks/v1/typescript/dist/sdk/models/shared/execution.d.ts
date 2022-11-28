import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionTemplate } from "./executiontemplate";
export declare enum ExecutionStateEnum {
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
/**
 * The definition of a single executed notebook.
**/
export declare class ExecutionInput extends SpeakeasyBase {
    description?: string;
    executionTemplate?: ExecutionTemplate;
    outputNotebookFile?: string;
}
/**
 * The definition of a single executed notebook.
**/
export declare class Execution extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    displayName?: string;
    executionTemplate?: ExecutionTemplate;
    jobUri?: string;
    name?: string;
    outputNotebookFile?: string;
    state?: ExecutionStateEnum;
    updateTime?: string;
}
