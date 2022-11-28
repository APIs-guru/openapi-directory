import { SpeakeasyBase } from "../../../internal/utils";
import { Debuggee } from "./debuggee";
/**
 * Request to register a debuggee.
**/
export declare class RegisterDebuggeeRequest extends SpeakeasyBase {
    debuggee?: Debuggee;
}
