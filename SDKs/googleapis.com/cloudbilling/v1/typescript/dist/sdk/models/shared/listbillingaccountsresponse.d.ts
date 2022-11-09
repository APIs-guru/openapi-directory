import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BillingAccount } from "./billingaccount";
/**
 * Response message for `ListBillingAccounts`.
**/
export declare class ListBillingAccountsResponse extends SpeakeasyBase {
    billingAccounts?: BillingAccount[];
    nextPageToken?: string;
}
