import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum {
    CustomerTypeUnspecified = "CUSTOMER_TYPE_UNSPECIFIED"
,    Domain = "DOMAIN"
,    Team = "TEAM"
}

export enum GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum {
    PromotionalTypeUnspecified = "PROMOTIONAL_TYPE_UNSPECIFIED"
,    NewUpgrade = "NEW_UPGRADE"
,    Transfer = "TRANSFER"
,    PromotionSwitch = "PROMOTION_SWITCH"
}


// GoogleCloudChannelV1CustomerConstraints
/** 
 * Represents constraints required to purchase the Offer for a customer.
**/
export class GoogleCloudChannelV1CustomerConstraints extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedCustomerTypes" })
  allowedCustomerTypes?: GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum[];

  @Metadata({ data: "json, name=allowedRegions" })
  allowedRegions?: string[];

  @Metadata({ data: "json, name=promotionalOrderTypes" })
  promotionalOrderTypes?: GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum[];
}
