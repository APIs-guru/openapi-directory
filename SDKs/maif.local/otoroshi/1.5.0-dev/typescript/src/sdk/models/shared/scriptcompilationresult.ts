import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScriptCompilationError } from "./scriptcompilationerror";


// ScriptCompilationResult
/** 
 * The result of the compilation of a Script
**/
export class ScriptCompilationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=done" })
  done: boolean;

  @Metadata({ data: "json, name=error" })
  error?: ScriptCompilationError;
}
