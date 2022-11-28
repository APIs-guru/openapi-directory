import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTaxTaxRule } from "./accounttaxtaxrule";
/**
 * The tax settings of a merchant account. All methods require the admin role.
**/
export declare class AccountTax extends SpeakeasyBase {
    accountId?: string;
    kind?: string;
    rules?: AccountTaxTaxRule[];
}
