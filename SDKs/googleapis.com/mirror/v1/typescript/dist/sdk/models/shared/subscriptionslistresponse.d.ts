import { SpeakeasyBase } from "../../../internal/utils";
import { Subscription } from "./subscription";
/**
 * A list of Subscriptions. This is the response from the server to GET requests on the subscription collection.
**/
export declare class SubscriptionsListResponse extends SpeakeasyBase {
    items?: Subscription[];
    kind?: string;
}
