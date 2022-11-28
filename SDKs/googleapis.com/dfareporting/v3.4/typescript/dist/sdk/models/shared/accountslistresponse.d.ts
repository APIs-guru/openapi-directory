import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * Account List Response
**/
export declare class AccountsListResponse extends SpeakeasyBase {
    accounts?: Account[];
    kind?: string;
    nextPageToken?: string;
}
