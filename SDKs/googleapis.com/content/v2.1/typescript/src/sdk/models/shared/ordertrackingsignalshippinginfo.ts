import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateTime } from "./datetime";


export enum OrderTrackingSignalShippingInfoShippingStatusEnum {
    ShippingStateUnspecified = "SHIPPING_STATE_UNSPECIFIED",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED"
}


// OrderTrackingSignalShippingInfo
/** 
 * The shipping information for the order.
**/
export class OrderTrackingSignalShippingInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actualDeliveryTime" })
  actualDeliveryTime?: DateTime;

  @SpeakeasyMetadata({ data: "json, name=carrierName" })
  carrierName?: string;

  @SpeakeasyMetadata({ data: "json, name=carrierServiceName" })
  carrierServiceName?: string;

  @SpeakeasyMetadata({ data: "json, name=earliestDeliveryPromiseTime" })
  earliestDeliveryPromiseTime?: DateTime;

  @SpeakeasyMetadata({ data: "json, name=latestDeliveryPromiseTime" })
  latestDeliveryPromiseTime?: DateTime;

  @SpeakeasyMetadata({ data: "json, name=originPostalCode" })
  originPostalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=originRegionCode" })
  originRegionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=shipmentId" })
  shipmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=shippedTime" })
  shippedTime?: DateTime;

  @SpeakeasyMetadata({ data: "json, name=shippingStatus" })
  shippingStatus?: OrderTrackingSignalShippingInfoShippingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=trackingId" })
  trackingId?: string;
}
