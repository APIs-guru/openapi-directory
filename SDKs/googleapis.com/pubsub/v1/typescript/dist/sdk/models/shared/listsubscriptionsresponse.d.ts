import { SpeakeasyBase } from "../../../internal/utils";
import { Subscription } from "./subscription";
/**
 * Response for the `ListSubscriptions` method.
**/
export declare class ListSubscriptionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    subscriptions?: Subscription[];
}
