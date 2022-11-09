import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DateTime } from "./datetime";
import { DateTime } from "./datetime";
import { DateTime } from "./datetime";
import { DateTime } from "./datetime";

export enum OrderTrackingSignalShippingInfoShippingStatusEnum {
    ShippingStateUnspecified = "SHIPPING_STATE_UNSPECIFIED"
,    Shipped = "SHIPPED"
,    Delivered = "DELIVERED"
}


// OrderTrackingSignalShippingInfo
/** 
 * The shipping information for the order.
**/
export class OrderTrackingSignalShippingInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=actualDeliveryTime" })
  actualDeliveryTime?: DateTime;

  @Metadata({ data: "json, name=carrierName" })
  carrierName?: string;

  @Metadata({ data: "json, name=carrierServiceName" })
  carrierServiceName?: string;

  @Metadata({ data: "json, name=earliestDeliveryPromiseTime" })
  earliestDeliveryPromiseTime?: DateTime;

  @Metadata({ data: "json, name=latestDeliveryPromiseTime" })
  latestDeliveryPromiseTime?: DateTime;

  @Metadata({ data: "json, name=originPostalCode" })
  originPostalCode?: string;

  @Metadata({ data: "json, name=originRegionCode" })
  originRegionCode?: string;

  @Metadata({ data: "json, name=shipmentId" })
  shipmentId?: string;

  @Metadata({ data: "json, name=shippedTime" })
  shippedTime?: DateTime;

  @Metadata({ data: "json, name=shippingStatus" })
  shippingStatus?: OrderTrackingSignalShippingInfoShippingStatusEnum;

  @Metadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
