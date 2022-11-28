import { SpeakeasyBase } from "../../../internal/utils";
import { Subscription } from "./subscription";
/**
 * A subscription manages the relationship of a Google customer's payment plan with a product's SKU, user licenses, 30-day free trial status, and renewal options. A primary role of a reseller is to manage the Google customer's subscriptions.
**/
export declare class Subscriptions extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    subscriptions?: Subscription[];
}
