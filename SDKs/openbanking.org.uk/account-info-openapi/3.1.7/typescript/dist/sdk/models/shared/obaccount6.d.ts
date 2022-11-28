import { SpeakeasyBase } from "../../../internal/utils";
import { ObExternalAccountSubType1CodeEnum } from "./obexternalaccountsubtype1codeenum";
import { ObExternalAccountType1CodeEnum } from "./obexternalaccounttype1codeenum";
import { ObBranchAndFinancialInstitutionIdentification50 } from "./obbranchandfinancialinstitutionidentification50";
import { ObAccountStatus1CodeEnum } from "./obaccountstatus1codeenum";
/**
 * Provides the details to identify an account.
**/
export declare class ObAccount6Account extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Unambiguous identification of the account to which credit and debit entries are made. The following fields are optional only for accounts that are switched:
 *
 *   * Data.Currency
 *   * Data.AccountType
 *   * Data.AccountSubType
 *
 * For all other accounts, the fields must be populated by the ASPSP.
**/
export declare class ObAccount6 extends SpeakeasyBase {
    account?: ObAccount6Account[];
    accountId: string;
    accountSubType?: ObExternalAccountSubType1CodeEnum;
    accountType?: ObExternalAccountType1CodeEnum;
    currency?: string;
    description?: string;
    maturityDate?: Date;
    nickname?: string;
    openingDate?: Date;
    servicer?: ObBranchAndFinancialInstitutionIdentification50;
    status?: ObAccountStatus1CodeEnum;
    statusUpdateDateTime?: Date;
    switchStatus?: string;
}
