import { SpeakeasyBase } from "../../../internal/utils";
import { ToolExecution } from "./toolexecution";
/**
 * Generic tool step to be used for binaries we do not explicitly support. For example: running cp to copy artifacts from one location to another.
**/
export declare class ToolExecutionStep extends SpeakeasyBase {
    toolExecution?: ToolExecution;
}
