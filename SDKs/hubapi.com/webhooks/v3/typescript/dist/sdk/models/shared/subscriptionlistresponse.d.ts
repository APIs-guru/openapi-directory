import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionResponse } from "./subscriptionresponse";
/**
 * List of event subscriptions for your app
**/
export declare class SubscriptionListResponse extends SpeakeasyBase {
    results: SubscriptionResponse[];
}
