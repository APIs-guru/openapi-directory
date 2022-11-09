import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SoftwareRecipeStepRunScriptInterpreterEnum {
    InterpreterUnspecified = "INTERPRETER_UNSPECIFIED"
,    Shell = "SHELL"
,    Powershell = "POWERSHELL"
}


// SoftwareRecipeStepRunScript
/** 
 * Runs a script through an interpreter.
**/
export class SoftwareRecipeStepRunScript extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedExitCodes" })
  allowedExitCodes?: number[];

  @Metadata({ data: "json, name=interpreter" })
  interpreter?: SoftwareRecipeStepRunScriptInterpreterEnum;

  @Metadata({ data: "json, name=script" })
  script?: string;
}
