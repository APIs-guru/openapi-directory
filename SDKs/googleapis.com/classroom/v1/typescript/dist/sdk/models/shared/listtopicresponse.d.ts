import { SpeakeasyBase } from "../../../internal/utils";
import { Topic } from "./topic";
/**
 * Response when listing topics.
**/
export declare class ListTopicResponse extends SpeakeasyBase {
    nextPageToken?: string;
    topic?: Topic[];
}
