import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";



// ListSessionsResponse
/** 
 * The response for ListSessions.
**/
export class ListSessionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sessions", elemType: Session })
  sessions?: Session[];
}
