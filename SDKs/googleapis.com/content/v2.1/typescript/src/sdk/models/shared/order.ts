import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderOrderAnnotation } from "./orderorderannotation";
import { OrderAddress } from "./orderaddress";
import { OrderCustomer } from "./ordercustomer";
import { OrderDeliveryDetails } from "./orderdeliverydetails";
import { OrderLineItem } from "./orderlineitem";
import { Price } from "./price";
import { Price } from "./price";
import { OrderPickupDetails } from "./orderpickupdetails";
import { OrderPromotion } from "./orderpromotion";
import { OrderRefund } from "./orderrefund";
import { OrderShipment } from "./ordershipment";
import { Price } from "./price";
import { Price } from "./price";


// Order
/** 
 * Order. Production access (all methods) requires the order manager role. Sandbox access does not.
**/
export class Order extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledged" })
  acknowledged?: boolean;

  @Metadata({ data: "json, name=annotations", elemType: shared.OrderOrderAnnotation })
  annotations?: OrderOrderAnnotation[];

  @Metadata({ data: "json, name=billingAddress" })
  billingAddress?: OrderAddress;

  @Metadata({ data: "json, name=customer" })
  customer?: OrderCustomer;

  @Metadata({ data: "json, name=deliveryDetails" })
  deliveryDetails?: OrderDeliveryDetails;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lineItems", elemType: shared.OrderLineItem })
  lineItems?: OrderLineItem[];

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=merchantOrderId" })
  merchantOrderId?: string;

  @Metadata({ data: "json, name=netPriceAmount" })
  netPriceAmount?: Price;

  @Metadata({ data: "json, name=netTaxAmount" })
  netTaxAmount?: Price;

  @Metadata({ data: "json, name=paymentStatus" })
  paymentStatus?: string;

  @Metadata({ data: "json, name=pickupDetails" })
  pickupDetails?: OrderPickupDetails;

  @Metadata({ data: "json, name=placedDate" })
  placedDate?: string;

  @Metadata({ data: "json, name=promotions", elemType: shared.OrderPromotion })
  promotions?: OrderPromotion[];

  @Metadata({ data: "json, name=refunds", elemType: shared.OrderRefund })
  refunds?: OrderRefund[];

  @Metadata({ data: "json, name=shipments", elemType: shared.OrderShipment })
  shipments?: OrderShipment[];

  @Metadata({ data: "json, name=shippingCost" })
  shippingCost?: Price;

  @Metadata({ data: "json, name=shippingCostTax" })
  shippingCostTax?: Price;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=taxCollector" })
  taxCollector?: string;
}
