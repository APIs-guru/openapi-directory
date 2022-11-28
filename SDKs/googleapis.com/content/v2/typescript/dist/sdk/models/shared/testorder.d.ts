import { SpeakeasyBase } from "../../../internal/utils";
import { TestOrderCustomer } from "./testordercustomer";
import { TestOrderLineItem } from "./testorderlineitem";
import { TestOrderPaymentMethod } from "./testorderpaymentmethod";
import { OrderLegacyPromotion } from "./orderlegacypromotion";
import { Price } from "./price";
export declare class TestOrder extends SpeakeasyBase {
    customer?: TestOrderCustomer;
    enableOrderinvoices?: boolean;
    kind?: string;
    lineItems?: TestOrderLineItem[];
    notificationMode?: string;
    paymentMethod?: TestOrderPaymentMethod;
    predefinedDeliveryAddress?: string;
    predefinedPickupDetails?: string;
    promotions?: OrderLegacyPromotion[];
    shippingCost?: Price;
    shippingCostTax?: Price;
    shippingOption?: string;
}
