import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WatchRequestLabelFilterActionEnum {
    Include = "include",
    Exclude = "exclude"
}
/**
 * Set up or update a new push notification watch on this user's mailbox.
**/
export declare class WatchRequest extends SpeakeasyBase {
    labelFilterAction?: WatchRequestLabelFilterActionEnum;
    labelIds?: string[];
    topicName?: string;
}
