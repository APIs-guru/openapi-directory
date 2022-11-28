import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScriptCompilationError } from "./scriptcompilationerror";



// ScriptCompilationResult
/** 
 * The result of the compilation of a Script
**/
export class ScriptCompilationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=done" })
  done: boolean;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ScriptCompilationError;
}
