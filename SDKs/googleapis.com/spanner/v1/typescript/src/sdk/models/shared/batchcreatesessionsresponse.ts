import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Session } from "./session";


// BatchCreateSessionsResponse
/** 
 * The response for BatchCreateSessions.
**/
export class BatchCreateSessionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=session", elemType: shared.Session })
  session?: Session[];
}
