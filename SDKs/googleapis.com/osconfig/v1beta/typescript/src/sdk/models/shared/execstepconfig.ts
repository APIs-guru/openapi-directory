import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcsObject } from "./gcsobject";

export enum ExecStepConfigInterpreterEnum {
    InterpreterUnspecified = "INTERPRETER_UNSPECIFIED"
,    None = "NONE"
,    Shell = "SHELL"
,    Powershell = "POWERSHELL"
}


// ExecStepConfig
/** 
 * Common configurations for an ExecStep.
**/
export class ExecStepConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedSuccessCodes" })
  allowedSuccessCodes?: number[];

  @Metadata({ data: "json, name=gcsObject" })
  gcsObject?: GcsObject;

  @Metadata({ data: "json, name=interpreter" })
  interpreter?: ExecStepConfigInterpreterEnum;

  @Metadata({ data: "json, name=localPath" })
  localPath?: string;
}
