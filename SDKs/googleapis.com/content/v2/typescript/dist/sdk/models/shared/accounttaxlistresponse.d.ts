import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTax } from "./accounttax";
export declare class AccounttaxListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    resources?: AccountTax[];
}
