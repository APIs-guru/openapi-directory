import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OsPolicyResourceFile } from "./ospolicyresourcefile";

export enum OsPolicyResourceExecResourceExecInterpreterEnum {
    InterpreterUnspecified = "INTERPRETER_UNSPECIFIED"
,    None = "NONE"
,    Shell = "SHELL"
,    Powershell = "POWERSHELL"
}


// OsPolicyResourceExecResourceExec
/** 
 * A file or script to execute.
**/
export class OsPolicyResourceExecResourceExec extends SpeakeasyBase {
  @Metadata({ data: "json, name=args" })
  args?: string[];

  @Metadata({ data: "json, name=file" })
  file?: OsPolicyResourceFile;

  @Metadata({ data: "json, name=interpreter" })
  interpreter?: OsPolicyResourceExecResourceExecInterpreterEnum;

  @Metadata({ data: "json, name=outputFilePath" })
  outputFilePath?: string;

  @Metadata({ data: "json, name=script" })
  script?: string;
}
