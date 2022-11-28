import { SpeakeasyBase } from "../../../internal/utils";
import { ObPostalAddress6 } from "./obpostaladdress6";
/**
 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
 * This is the servicer of the beneficiary account.
**/
export declare class ObBranchAndFinancialInstitutionIdentification60 extends SpeakeasyBase {
    identification?: string;
    name?: string;
    postalAddress?: ObPostalAddress6;
    schemeName?: string;
}
