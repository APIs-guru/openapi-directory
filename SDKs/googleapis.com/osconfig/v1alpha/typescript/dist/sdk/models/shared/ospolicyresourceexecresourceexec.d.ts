import { SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceFile } from "./ospolicyresourcefile";
export declare enum OsPolicyResourceExecResourceExecInterpreterEnum {
    InterpreterUnspecified = "INTERPRETER_UNSPECIFIED",
    None = "NONE",
    Shell = "SHELL",
    Powershell = "POWERSHELL"
}
/**
 * A file or script to execute.
**/
export declare class OsPolicyResourceExecResourceExec extends SpeakeasyBase {
    args?: string[];
    file?: OsPolicyResourceFile;
    interpreter?: OsPolicyResourceExecResourceExecInterpreterEnum;
    outputFilePath?: string;
    script?: string;
}
