import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1RepricingConfigEntitlementGranularity
/** 
 * Applies the repricing configuration at the entitlement level.
**/
export class GoogleCloudChannelV1RepricingConfigEntitlementGranularity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entitlement" })
  entitlement?: string;
}
