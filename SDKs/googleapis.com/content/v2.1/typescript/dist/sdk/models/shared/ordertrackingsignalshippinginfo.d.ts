import { SpeakeasyBase } from "../../../internal/utils";
import { DateTime } from "./datetime";
export declare enum OrderTrackingSignalShippingInfoShippingStatusEnum {
    ShippingStateUnspecified = "SHIPPING_STATE_UNSPECIFIED",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED"
}
/**
 * The shipping information for the order.
**/
export declare class OrderTrackingSignalShippingInfo extends SpeakeasyBase {
    actualDeliveryTime?: DateTime;
    carrierName?: string;
    carrierServiceName?: string;
    earliestDeliveryPromiseTime?: DateTime;
    latestDeliveryPromiseTime?: DateTime;
    originPostalCode?: string;
    originRegionCode?: string;
    shipmentId?: string;
    shippedTime?: DateTime;
    shippingStatus?: OrderTrackingSignalShippingInfoShippingStatusEnum;
    trackingId?: string;
}
