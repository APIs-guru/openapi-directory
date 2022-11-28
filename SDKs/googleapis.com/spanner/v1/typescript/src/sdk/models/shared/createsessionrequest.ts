import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SessionInput } from "./session";



// CreateSessionRequestInput
/** 
 * The request for CreateSession.
**/
export class CreateSessionRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=session" })
  session?: SessionInput;
}
