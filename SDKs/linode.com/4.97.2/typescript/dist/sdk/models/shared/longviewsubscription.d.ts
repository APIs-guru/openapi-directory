import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LongviewSubscriptionIdEnum {
    Longview3 = "longview-3",
    Longview10 = "longview-10",
    Longview40 = "longview-40",
    Longview100 = "longview-100"
}
/**
 * Pricing information about this Subscription tier.
 *
**/
export declare class LongviewSubscriptionPrice extends SpeakeasyBase {
    hourly?: number;
    monthly?: number;
}
/**
 * A Longview Subscription represents a tier of Longview service you can subscribe to.
 *
**/
export declare class LongviewSubscription extends SpeakeasyBase {
    clientsIncluded?: number;
    id?: LongviewSubscriptionIdEnum;
    label?: string;
    price?: LongviewSubscriptionPrice;
}
