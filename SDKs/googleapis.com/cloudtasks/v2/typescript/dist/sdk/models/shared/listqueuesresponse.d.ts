import { SpeakeasyBase } from "../../../internal/utils";
import { Queue } from "./queue";
/**
 * Response message for ListQueues.
**/
export declare class ListQueuesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    queues?: Queue[];
}
