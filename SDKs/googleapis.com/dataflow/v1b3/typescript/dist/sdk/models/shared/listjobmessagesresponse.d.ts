import { SpeakeasyBase } from "../../../internal/utils";
import { AutoscalingEvent } from "./autoscalingevent";
import { JobMessage } from "./jobmessage";
/**
 * Response to a request to list job messages.
**/
export declare class ListJobMessagesResponse extends SpeakeasyBase {
    autoscalingEvents?: AutoscalingEvent[];
    jobMessages?: JobMessage[];
    nextPageToken?: string;
}
