import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceFile } from "./ospolicyresourcefile";


export enum OsPolicyResourceExecResourceExecInterpreterEnum {
    InterpreterUnspecified = "INTERPRETER_UNSPECIFIED",
    None = "NONE",
    Shell = "SHELL",
    Powershell = "POWERSHELL"
}


// OsPolicyResourceExecResourceExec
/** 
 * A file or script to execute.
**/
export class OsPolicyResourceExecResourceExec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=args" })
  args?: string[];

  @SpeakeasyMetadata({ data: "json, name=file" })
  file?: OsPolicyResourceFile;

  @SpeakeasyMetadata({ data: "json, name=interpreter" })
  interpreter?: OsPolicyResourceExecResourceExecInterpreterEnum;

  @SpeakeasyMetadata({ data: "json, name=outputFilePath" })
  outputFilePath?: string;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;
}
