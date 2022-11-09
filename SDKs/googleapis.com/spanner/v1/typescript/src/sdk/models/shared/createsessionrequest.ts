import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Session } from "./session";


// CreateSessionRequest
/** 
 * The request for CreateSession.
**/
export class CreateSessionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=session" })
  session?: Session;
}
