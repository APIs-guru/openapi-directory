import { SpeakeasyBase } from "../../../internal/utils";
import { GcsObject } from "./gcsobject";
export declare enum ExecStepConfigInterpreterEnum {
    InterpreterUnspecified = "INTERPRETER_UNSPECIFIED",
    None = "NONE",
    Shell = "SHELL",
    Powershell = "POWERSHELL"
}
/**
 * Common configurations for an ExecStep.
**/
export declare class ExecStepConfig extends SpeakeasyBase {
    allowedSuccessCodes?: number[];
    gcsObject?: GcsObject;
    interpreter?: ExecStepConfigInterpreterEnum;
    localPath?: string;
}
