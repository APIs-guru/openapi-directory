import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Debuggee } from "./debuggee";



// RegisterDebuggeeResponse
/** 
 * Response for registering a debuggee.
**/
export class RegisterDebuggeeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agentId" })
  agentId?: string;

  @SpeakeasyMetadata({ data: "json, name=debuggee" })
  debuggee?: Debuggee;
}
