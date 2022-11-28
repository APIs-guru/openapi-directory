import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdvertiserBillingConfig
/** 
 * Billing related settings of an advertiser.
**/
export class AdvertiserBillingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingProfileId" })
  billingProfileId?: string;
}
