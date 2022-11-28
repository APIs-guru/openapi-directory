import { SpeakeasyBase } from "../../../internal/utils";
import { Topic } from "./topic";
/**
 * Response for ListTopics.
**/
export declare class ListTopicsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    topics?: Topic[];
}
