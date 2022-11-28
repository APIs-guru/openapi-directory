import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BillingAssignment
/** 
 * List account, subaccount, advertiser, and campaign associated with a given Billing Profile.
**/
export class BillingAssignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=subaccountId" })
  subaccountId?: string;
}
