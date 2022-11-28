import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SoftwareRecipeStepRunScriptInterpreterEnum {
    InterpreterUnspecified = "INTERPRETER_UNSPECIFIED",
    Shell = "SHELL",
    Powershell = "POWERSHELL"
}
/**
 * Runs a script through an interpreter.
**/
export declare class SoftwareRecipeStepRunScript extends SpeakeasyBase {
    allowedExitCodes?: number[];
    interpreter?: SoftwareRecipeStepRunScriptInterpreterEnum;
    script?: string;
}
