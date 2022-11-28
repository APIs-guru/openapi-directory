import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
export declare class AccountsListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    resources?: Account[];
}
