import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status.
**/
export declare class ExecutionReference extends SpeakeasyBase {
    completionTimestamp?: string;
    creationTimestamp?: string;
    name?: string;
}
