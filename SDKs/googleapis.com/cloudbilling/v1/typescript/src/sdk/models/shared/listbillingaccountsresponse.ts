import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingAccount } from "./billingaccount";



// ListBillingAccountsResponse
/** 
 * Response message for `ListBillingAccounts`.
**/
export class ListBillingAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingAccounts", elemType: BillingAccount })
  billingAccounts?: BillingAccount[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
