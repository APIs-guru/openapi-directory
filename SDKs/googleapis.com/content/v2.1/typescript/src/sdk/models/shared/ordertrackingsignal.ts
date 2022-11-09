import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=customerShippingFee" })
  customerShippingFee?: PriceAmount;

  @Metadata({ data: "json, name=deliveryPostalCode" })
  deliveryPostalCode?: string;

  @Metadata({ data: "json, name=deliveryRegionCode" })
  deliveryRegionCode?: string;

  @Metadata({ data: "json, name=lineItems", elemType: shared.OrderTrackingSignalLineItemDetails })
  lineItems?: OrderTrackingSignalLineItemDetails[];

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=orderCreatedTime" })
  orderCreatedTime?: DateTime;

  @Metadata({ data: "json, name=orderId" })
  orderId?: string;

  @Metadata({ data: "json, name=orderTrackingSignalId" })
  orderTrackingSignalId?: string;

  @Metadata({ data: "json, name=shipmentLineItemMapping", elemType: shared.OrderTrackingSignalShipmentLineItemMapping })
  shipmentLineItemMapping?: OrderTrackingSignalShipmentLineItemMapping[];

  @Metadata({ data: "json, name=shippingInfo", elemType: shared.OrderTrackingSignalShippingInfo })
  shippingInfo?: OrderTrackingSignalShippingInfo[];
}
