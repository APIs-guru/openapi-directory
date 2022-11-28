import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The error of the compilation of a Script
**/
export declare class ScriptCompilationError extends SpeakeasyBase {
    column: string;
    file: Map<string, string>;
    line: string;
    message: Map<string, string>;
    rawMessage: Map<string, string>;
}
