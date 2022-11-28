import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * Order. Production access (all methods) requires the order manager role. Sandbox access does not.
**/
export declare class Order extends SpeakeasyBase {
    acknowledged?: boolean;
    annotations?: OrderOrderAnnotation[];
    billingAddress?: OrderAddress;
    customer?: OrderCustomer;
    deliveryDetails?: OrderDeliveryDetails;
    id?: string;
    kind?: string;
    lineItems?: OrderLineItem[];
    merchantId?: string;
    merchantOrderId?: string;
    netPriceAmount?: Price;
    netTaxAmount?: Price;
    paymentStatus?: string;
    pickupDetails?: OrderPickupDetails;
    placedDate?: string;
    promotions?: OrderPromotion[];
    refunds?: OrderRefund[];
    shipments?: OrderShipment[];
    shippingCost?: Price;
    shippingCostTax?: Price;
    status?: string;
    taxCollector?: string;
}
