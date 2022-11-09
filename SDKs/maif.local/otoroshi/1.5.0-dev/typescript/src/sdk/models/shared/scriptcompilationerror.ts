import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScriptCompilationError
/** 
 * The error of the compilation of a Script
**/
export class ScriptCompilationError extends SpeakeasyBase {
  @Metadata({ data: "json, name=column" })
  column: string;

  @Metadata({ data: "json, name=file" })
  file: Map<string, string>;

  @Metadata({ data: "json, name=line" })
  line: string;

  @Metadata({ data: "json, name=message" })
  message: Map<string, string>;

  @Metadata({ data: "json, name=rawMessage" })
  rawMessage: Map<string, string>;
}
