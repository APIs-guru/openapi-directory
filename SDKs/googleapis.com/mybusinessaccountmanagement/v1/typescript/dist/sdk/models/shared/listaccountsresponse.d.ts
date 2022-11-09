import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Account } from "./account";
/**
 * Response message for Accounts.ListAccounts.
**/
export declare class ListAccountsResponse extends SpeakeasyBase {
    accounts?: Account[];
    nextPageToken?: string;
}
