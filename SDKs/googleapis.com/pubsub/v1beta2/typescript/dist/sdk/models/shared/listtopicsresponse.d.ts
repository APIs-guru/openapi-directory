import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Topic } from "./topic";
/**
 * Response for the `ListTopics` method.
**/
export declare class ListTopicsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    topics?: Topic[];
}
