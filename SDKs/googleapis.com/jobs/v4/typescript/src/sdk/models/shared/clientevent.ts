import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobEvent } from "./jobevent";



// ClientEvent
/** 
 * An event issued when an end user interacts with the application that implements Cloud Talent Solution. Providing this information improves the quality of results for the API clients, enabling the service to perform optimally. The number of events sent must be consistent with other calls, such as job searches, issued to the service by the client.
**/
export class ClientEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=eventNotes" })
  eventNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=jobEvent" })
  jobEvent?: JobEvent;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
