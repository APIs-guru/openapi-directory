import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Session } from "./session";


// ListSessionsResponse
/** 
 * The response for ListSessions.
**/
export class ListSessionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=sessions", elemType: shared.Session })
  sessions?: Session[];
}
