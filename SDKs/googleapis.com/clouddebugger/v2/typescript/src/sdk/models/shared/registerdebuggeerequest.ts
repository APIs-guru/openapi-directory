import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Debuggee } from "./debuggee";


// RegisterDebuggeeRequest
/** 
 * Request to register a debuggee.
**/
export class RegisterDebuggeeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=debuggee" })
  debuggee?: Debuggee;
}
