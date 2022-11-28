import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Debuggee } from "./debuggee";



// RegisterDebuggeeRequest
/** 
 * Request to register a debuggee.
**/
export class RegisterDebuggeeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debuggee" })
  debuggee?: Debuggee;
}
