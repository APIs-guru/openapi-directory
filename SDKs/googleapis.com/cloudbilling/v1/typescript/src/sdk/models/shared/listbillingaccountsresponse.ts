import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BillingAccount } from "./billingaccount";


// ListBillingAccountsResponse
/** 
 * Response message for `ListBillingAccounts`.
**/
export class ListBillingAccountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingAccounts", elemType: shared.BillingAccount })
  billingAccounts?: BillingAccount[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
