import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueuedResource } from "./queuedresource";



// ListQueuedResourcesResponse
/** 
 * Response for ListQueuedResources.
**/
export class ListQueuedResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=queuedResources", elemType: QueuedResource })
  queuedResources?: QueuedResource[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
