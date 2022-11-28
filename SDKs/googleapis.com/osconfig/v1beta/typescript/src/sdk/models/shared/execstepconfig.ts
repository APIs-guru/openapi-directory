import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcsObject } from "./gcsobject";


export enum ExecStepConfigInterpreterEnum {
    InterpreterUnspecified = "INTERPRETER_UNSPECIFIED",
    None = "NONE",
    Shell = "SHELL",
    Powershell = "POWERSHELL"
}


// ExecStepConfig
/** 
 * Common configurations for an ExecStep.
**/
export class ExecStepConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedSuccessCodes" })
  allowedSuccessCodes?: number[];

  @SpeakeasyMetadata({ data: "json, name=gcsObject" })
  gcsObject?: GcsObject;

  @SpeakeasyMetadata({ data: "json, name=interpreter" })
  interpreter?: ExecStepConfigInterpreterEnum;

  @SpeakeasyMetadata({ data: "json, name=localPath" })
  localPath?: string;
}
