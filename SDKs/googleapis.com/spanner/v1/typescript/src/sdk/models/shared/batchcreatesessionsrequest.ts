import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Session } from "./session";


// BatchCreateSessionsRequest
/** 
 * The request for BatchCreateSessions.
**/
export class BatchCreateSessionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=sessionCount" })
  sessionCount?: number;

  @Metadata({ data: "json, name=sessionTemplate" })
  sessionTemplate?: Session;
}
