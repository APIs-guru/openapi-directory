import { SpeakeasyBase } from "../../../internal/utils";
import { Subaccount } from "./subaccount";
/**
 * Subaccount List Response
**/
export declare class SubaccountsListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    subaccounts?: Subaccount[];
}
