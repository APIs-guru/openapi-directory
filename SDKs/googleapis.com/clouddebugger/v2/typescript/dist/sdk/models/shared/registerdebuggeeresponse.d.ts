import { SpeakeasyBase } from "../../../internal/utils";
import { Debuggee } from "./debuggee";
/**
 * Response for registering a debuggee.
**/
export declare class RegisterDebuggeeResponse extends SpeakeasyBase {
    agentId?: string;
    debuggee?: Debuggee;
}
