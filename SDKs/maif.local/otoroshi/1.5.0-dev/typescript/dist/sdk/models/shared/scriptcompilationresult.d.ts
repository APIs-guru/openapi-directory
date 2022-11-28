import { SpeakeasyBase } from "../../../internal/utils";
import { ScriptCompilationError } from "./scriptcompilationerror";
/**
 * The result of the compilation of a Script
**/
export declare class ScriptCompilationResult extends SpeakeasyBase {
    done: boolean;
    error?: ScriptCompilationError;
}
