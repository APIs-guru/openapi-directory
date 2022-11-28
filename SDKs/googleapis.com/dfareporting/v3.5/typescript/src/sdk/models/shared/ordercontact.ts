import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OrderContactContactTypeEnum {
    PlanningOrderContactBuyerContact = "PLANNING_ORDER_CONTACT_BUYER_CONTACT",
    PlanningOrderContactBuyerBillingContact = "PLANNING_ORDER_CONTACT_BUYER_BILLING_CONTACT",
    PlanningOrderContactSellerContact = "PLANNING_ORDER_CONTACT_SELLER_CONTACT"
}


// OrderContact
/** 
 * Contact of an order.
**/
export class OrderContact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactInfo" })
  contactInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=contactName" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=contactTitle" })
  contactTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=contactType" })
  contactType?: OrderContactContactTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=signatureUserProfileId" })
  signatureUserProfileId?: string;
}
