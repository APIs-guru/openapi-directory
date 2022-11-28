import { SpeakeasyBase } from "../../../internal/utils";
import { OrderCustomer } from "./ordercustomer";
import { OrderDeliveryDetails } from "./orderdeliverydetails";
import { OrderLineItem } from "./orderlineitem";
import { Price } from "./price";
import { OrderPaymentMethod } from "./orderpaymentmethod";
import { OrderPickupDetails } from "./orderpickupdetails";
import { OrderLegacyPromotion } from "./orderlegacypromotion";
import { OrderRefund } from "./orderrefund";
import { OrderShipment } from "./ordershipment";
/**
 * Order. Production access (all methods) requires the order manager role. Sandbox access does not.
**/
export declare class Order extends SpeakeasyBase {
    acknowledged?: boolean;
    channelType?: string;
    customer?: OrderCustomer;
    deliveryDetails?: OrderDeliveryDetails;
    id?: string;
    kind?: string;
    lineItems?: OrderLineItem[];
    merchantId?: string;
    merchantOrderId?: string;
    netAmount?: Price;
    paymentMethod?: OrderPaymentMethod;
    paymentStatus?: string;
    pickupDetails?: OrderPickupDetails;
    placedDate?: string;
    promotions?: OrderLegacyPromotion[];
    refunds?: OrderRefund[];
    shipments?: OrderShipment[];
    shippingCost?: Price;
    shippingCostTax?: Price;
    shippingOption?: string;
    status?: string;
    taxCollector?: string;
}
