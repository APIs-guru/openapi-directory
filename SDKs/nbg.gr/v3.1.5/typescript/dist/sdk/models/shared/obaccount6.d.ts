import { SpeakeasyBase } from "../../../internal/utils";
import { ObCashAccount5 } from "./obcashaccount5";
import { ObExternalAccountSubType1CodeEnum } from "./obexternalaccountsubtype1codeenum";
import { ObExternalAccountType1CodeEnum } from "./obexternalaccounttype1codeenum";
import { ObBranchAndFinancialInstitutionIdentification5 } from "./obbranchandfinancialinstitutionidentification5";
/**
 * Unambiguous identification of the account to which credit and debit entries are made.
**/
export declare class ObAccount6 extends SpeakeasyBase {
    account?: ObCashAccount5[];
    accountId: string;
    accountSubType: ObExternalAccountSubType1CodeEnum;
    accountType: ObExternalAccountType1CodeEnum;
    currency: string;
    description?: string;
    nickname?: string;
    openingDate?: Date;
    servicer?: ObBranchAndFinancialInstitutionIdentification5;
}
