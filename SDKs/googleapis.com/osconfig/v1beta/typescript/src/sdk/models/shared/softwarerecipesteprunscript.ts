import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SoftwareRecipeStepRunScriptInterpreterEnum {
    InterpreterUnspecified = "INTERPRETER_UNSPECIFIED",
    Shell = "SHELL",
    Powershell = "POWERSHELL"
}


// SoftwareRecipeStepRunScript
/** 
 * Runs a script through an interpreter.
**/
export class SoftwareRecipeStepRunScript extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedExitCodes" })
  allowedExitCodes?: number[];

  @SpeakeasyMetadata({ data: "json, name=interpreter" })
  interpreter?: SoftwareRecipeStepRunScriptInterpreterEnum;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;
}
