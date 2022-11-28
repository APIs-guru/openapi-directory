import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum {
    CustomerTypeUnspecified = "CUSTOMER_TYPE_UNSPECIFIED",
    Domain = "DOMAIN",
    Team = "TEAM"
}

export enum GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum {
    PromotionalTypeUnspecified = "PROMOTIONAL_TYPE_UNSPECIFIED",
    NewUpgrade = "NEW_UPGRADE",
    Transfer = "TRANSFER",
    PromotionSwitch = "PROMOTION_SWITCH"
}


// GoogleCloudChannelV1CustomerConstraints
/** 
 * Represents constraints required to purchase the Offer for a customer.
**/
export class GoogleCloudChannelV1CustomerConstraints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedCustomerTypes" })
  allowedCustomerTypes?: GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=allowedRegions" })
  allowedRegions?: string[];

  @SpeakeasyMetadata({ data: "json, name=promotionalOrderTypes" })
  promotionalOrderTypes?: GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum[];
}
