import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BillingAssignment
/** 
 * List account, subaccount, advertiser, and campaign associated with a given Billing Profile.
**/
export class BillingAssignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;
}
