import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PriceAmount } from "./priceamount";
import { OrderTrackingSignalLineItemDetails } from "./ordertrackingsignallineitemdetails";
import { DateTime } from "./datetime";
import { OrderTrackingSignalShipmentLineItemMapping } from "./ordertrackingsignalshipmentlineitemmapping";
import { OrderTrackingSignalShippingInfo } from "./ordertrackingsignalshippinginfo";



// OrderTrackingSignal
/** 
 * Represents a merchant trade from which signals are extracted, e.g. shipping.
**/
export class OrderTrackingSignal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerShippingFee" })
  customerShippingFee?: PriceAmount;

  @SpeakeasyMetadata({ data: "json, name=deliveryPostalCode" })
  deliveryPostalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryRegionCode" })
  deliveryRegionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: OrderTrackingSignalLineItemDetails })
  lineItems?: OrderTrackingSignalLineItemDetails[];

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderCreatedTime" })
  orderCreatedTime?: DateTime;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderTrackingSignalId" })
  orderTrackingSignalId?: string;

  @SpeakeasyMetadata({ data: "json, name=shipmentLineItemMapping", elemType: OrderTrackingSignalShipmentLineItemMapping })
  shipmentLineItemMapping?: OrderTrackingSignalShipmentLineItemMapping[];

  @SpeakeasyMetadata({ data: "json, name=shippingInfo", elemType: OrderTrackingSignalShippingInfo })
  shippingInfo?: OrderTrackingSignalShippingInfo[];
}


// OrderTrackingSignalInput
/** 
 * Represents a merchant trade from which signals are extracted, e.g. shipping.
**/
export class OrderTrackingSignalInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerShippingFee" })
  customerShippingFee?: PriceAmount;

  @SpeakeasyMetadata({ data: "json, name=deliveryPostalCode" })
  deliveryPostalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryRegionCode" })
  deliveryRegionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: OrderTrackingSignalLineItemDetails })
  lineItems?: OrderTrackingSignalLineItemDetails[];

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderCreatedTime" })
  orderCreatedTime?: DateTime;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=shipmentLineItemMapping", elemType: OrderTrackingSignalShipmentLineItemMapping })
  shipmentLineItemMapping?: OrderTrackingSignalShipmentLineItemMapping[];

  @SpeakeasyMetadata({ data: "json, name=shippingInfo", elemType: OrderTrackingSignalShippingInfo })
  shippingInfo?: OrderTrackingSignalShippingInfo[];
}
