import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OrderContactContactTypeEnum {
    PlanningOrderContactBuyerContact = "PLANNING_ORDER_CONTACT_BUYER_CONTACT",
    PlanningOrderContactBuyerBillingContact = "PLANNING_ORDER_CONTACT_BUYER_BILLING_CONTACT",
    PlanningOrderContactSellerContact = "PLANNING_ORDER_CONTACT_SELLER_CONTACT"
}
/**
 * Contact of an order.
**/
export declare class OrderContact extends SpeakeasyBase {
    contactInfo?: string;
    contactName?: string;
    contactTitle?: string;
    contactType?: OrderContactContactTypeEnum;
    signatureUserProfileId?: string;
}
