import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Performance metrics. Values are only set for metrics requested explicitly in the request's search query.
**/
export declare class Metrics extends SpeakeasyBase {
    aos?: number;
    aovMicros?: number;
    clicks?: string;
    conversionRate?: number;
    conversionValueMicros?: string;
    conversions?: number;
    ctr?: number;
    daysToShip?: number;
    impressions?: string;
    itemDaysToShip?: number;
    itemFillRate?: number;
    orderedItemSalesMicros?: string;
    orderedItems?: string;
    orders?: string;
    rejectedItems?: string;
    returnRate?: number;
    returnedItems?: string;
    returnsMicros?: string;
    shippedItemSalesMicros?: string;
    shippedItems?: string;
    shippedOrders?: string;
    unshippedItems?: number;
    unshippedOrders?: number;
}
