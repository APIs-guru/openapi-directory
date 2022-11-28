import { SpeakeasyBase } from "../../../internal/utils";
import { QueuedResource } from "./queuedresource";
/**
 * Response for ListQueuedResources.
**/
export declare class ListQueuedResourcesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    queuedResources?: QueuedResource[];
    unreachable?: string[];
}
