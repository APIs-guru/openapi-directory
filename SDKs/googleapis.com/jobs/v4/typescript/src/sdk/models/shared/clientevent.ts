import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobEvent } from "./jobevent";


// ClientEvent
/** 
 * An event issued when an end user interacts with the application that implements Cloud Talent Solution. Providing this information improves the quality of results for the API clients, enabling the service to perform optimally. The number of events sent must be consistent with other calls, such as job searches, issued to the service by the client.
**/
export class ClientEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=eventId" })
  eventId?: string;

  @Metadata({ data: "json, name=eventNotes" })
  eventNotes?: string;

  @Metadata({ data: "json, name=jobEvent" })
  jobEvent?: JobEvent;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
