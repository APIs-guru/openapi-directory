import { SpeakeasyBase } from "../../../internal/utils";
import { TestOrderDeliveryDetails } from "./testorderdeliverydetails";
import { TestOrderLineItem } from "./testorderlineitem";
import { TestOrderPickupDetails } from "./testorderpickupdetails";
import { OrderPromotion } from "./orderpromotion";
import { Price } from "./price";
export declare class TestOrder extends SpeakeasyBase {
    deliveryDetails?: TestOrderDeliveryDetails;
    enableOrderinvoices?: boolean;
    kind?: string;
    lineItems?: TestOrderLineItem[];
    notificationMode?: string;
    pickupDetails?: TestOrderPickupDetails;
    predefinedBillingAddress?: string;
    predefinedDeliveryAddress?: string;
    predefinedEmail?: string;
    predefinedPickupDetails?: string;
    promotions?: OrderPromotion[];
    shippingCost?: Price;
    shippingOption?: string;
}
