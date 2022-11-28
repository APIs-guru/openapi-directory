import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * List Accounts Response.
**/
export declare class ListAccountsResponse extends SpeakeasyBase {
    account?: Account[];
    nextPageToken?: string;
}
