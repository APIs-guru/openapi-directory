import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OrderContactContactTypeEnum {
    PlanningOrderContactBuyerContact = "PLANNING_ORDER_CONTACT_BUYER_CONTACT"
,    PlanningOrderContactBuyerBillingContact = "PLANNING_ORDER_CONTACT_BUYER_BILLING_CONTACT"
,    PlanningOrderContactSellerContact = "PLANNING_ORDER_CONTACT_SELLER_CONTACT"
}


// OrderContact
/** 
 * Contact of an order.
**/
export class OrderContact extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactInfo" })
  contactInfo?: string;

  @Metadata({ data: "json, name=contactName" })
  contactName?: string;

  @Metadata({ data: "json, name=contactTitle" })
  contactTitle?: string;

  @Metadata({ data: "json, name=contactType" })
  contactType?: OrderContactContactTypeEnum;

  @Metadata({ data: "json, name=signatureUserProfileId" })
  signatureUserProfileId?: string;
}
