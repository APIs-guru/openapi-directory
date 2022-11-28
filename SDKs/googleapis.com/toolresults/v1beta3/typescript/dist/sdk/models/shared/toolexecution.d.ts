import { SpeakeasyBase } from "../../../internal/utils";
import { ToolExitCode } from "./toolexitcode";
import { FileReference } from "./filereference";
import { ToolOutputReference } from "./tooloutputreference";
/**
 * An execution of an arbitrary tool. It could be a test runner or a tool copying artifacts or deploying code.
**/
export declare class ToolExecution extends SpeakeasyBase {
    commandLineArguments?: string[];
    exitCode?: ToolExitCode;
    toolLogs?: FileReference[];
    toolOutputs?: ToolOutputReference[];
}
