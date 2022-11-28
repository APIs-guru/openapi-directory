import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Queue1 } from "./queue1";



// ListQueuesResponse
/** 
 * Response message for ListQueues.
**/
export class ListQueuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=queues", elemType: Queue1 })
  queues?: Queue1[];
}
