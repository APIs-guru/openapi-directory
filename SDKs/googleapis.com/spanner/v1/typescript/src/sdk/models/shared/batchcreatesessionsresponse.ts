import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";



// BatchCreateSessionsResponse
/** 
 * The response for BatchCreateSessions.
**/
export class BatchCreateSessionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=session", elemType: Session })
  session?: Session[];
}
