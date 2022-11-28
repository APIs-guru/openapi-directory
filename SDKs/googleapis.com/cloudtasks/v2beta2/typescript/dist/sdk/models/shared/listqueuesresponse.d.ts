import { SpeakeasyBase } from "../../../internal/utils";
import { Queue1 } from "./queue1";
/**
 * Response message for ListQueues.
**/
export declare class ListQueuesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    queues?: Queue1[];
}
