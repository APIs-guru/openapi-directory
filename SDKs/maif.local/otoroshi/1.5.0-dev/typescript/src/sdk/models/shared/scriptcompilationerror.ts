import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScriptCompilationError
/** 
 * The error of the compilation of a Script
**/
export class ScriptCompilationError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column" })
  column: string;

  @SpeakeasyMetadata({ data: "json, name=file" })
  file: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=line" })
  line: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=rawMessage" })
  rawMessage: Map<string, string>;
}
