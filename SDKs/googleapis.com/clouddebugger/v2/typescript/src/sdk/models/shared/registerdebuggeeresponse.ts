import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Debuggee } from "./debuggee";


// RegisterDebuggeeResponse
/** 
 * Response for registering a debuggee.
**/
export class RegisterDebuggeeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=agentId" })
  agentId?: string;

  @Metadata({ data: "json, name=debuggee" })
  debuggee?: Debuggee;
}
