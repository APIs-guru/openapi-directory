import { SpeakeasyBase } from "../../../internal/utils";
import { JobEvent } from "./jobevent";
/**
 * An event issued when an end user interacts with the application that implements Cloud Talent Solution. Providing this information improves the quality of results for the API clients, enabling the service to perform optimally. The number of events sent must be consistent with other calls, such as job searches, issued to the service by the client.
**/
export declare class ClientEvent extends SpeakeasyBase {
    createTime?: string;
    eventId?: string;
    eventNotes?: string;
    jobEvent?: JobEvent;
    requestId?: string;
}
