import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A task which consists of a shell command for the worker to execute.
**/
export declare class ShellTask extends SpeakeasyBase {
    command?: string;
    exitCode?: number;
}
