import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderOrderAnnotation } from "./orderorderannotation";
import { OrderAddress } from "./orderaddress";
import { OrderCustomer } from "./ordercustomer";
import { OrderDeliveryDetails } from "./orderdeliverydetails";
import { OrderLineItem } from "./orderlineitem";
import { Price } from "./price";
import { OrderPickupDetails } from "./orderpickupdetails";
import { OrderPromotion } from "./orderpromotion";
import { OrderRefund } from "./orderrefund";
import { OrderShipment } from "./ordershipment";



// Order
/** 
 * Order. Production access (all methods) requires the order manager role. Sandbox access does not.
**/
export class Order extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledged" })
  acknowledged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=annotations", elemType: OrderOrderAnnotation })
  annotations?: OrderOrderAnnotation[];

  @SpeakeasyMetadata({ data: "json, name=billingAddress" })
  billingAddress?: OrderAddress;

  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: OrderCustomer;

  @SpeakeasyMetadata({ data: "json, name=deliveryDetails" })
  deliveryDetails?: OrderDeliveryDetails;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: OrderLineItem })
  lineItems?: OrderLineItem[];

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantOrderId" })
  merchantOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=netPriceAmount" })
  netPriceAmount?: Price;

  @SpeakeasyMetadata({ data: "json, name=netTaxAmount" })
  netTaxAmount?: Price;

  @SpeakeasyMetadata({ data: "json, name=paymentStatus" })
  paymentStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupDetails" })
  pickupDetails?: OrderPickupDetails;

  @SpeakeasyMetadata({ data: "json, name=placedDate" })
  placedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=promotions", elemType: OrderPromotion })
  promotions?: OrderPromotion[];

  @SpeakeasyMetadata({ data: "json, name=refunds", elemType: OrderRefund })
  refunds?: OrderRefund[];

  @SpeakeasyMetadata({ data: "json, name=shipments", elemType: OrderShipment })
  shipments?: OrderShipment[];

  @SpeakeasyMetadata({ data: "json, name=shippingCost" })
  shippingCost?: Price;

  @SpeakeasyMetadata({ data: "json, name=shippingCostTax" })
  shippingCostTax?: Price;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=taxCollector" })
  taxCollector?: string;
}
