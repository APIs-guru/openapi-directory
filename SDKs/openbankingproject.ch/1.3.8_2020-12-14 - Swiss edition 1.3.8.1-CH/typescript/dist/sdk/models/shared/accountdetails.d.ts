import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { Balance } from "./balance";
import { AccountStatusEnum } from "./accountstatusenum";
export declare enum AccountDetailsUsageEnum {
    Priv = "PRIV",
    Orga = "ORGA"
}
/**
 * The ASPSP shall give at least one of the account reference identifiers:
 *   - iban
 *   - bban
 *   - pan
 *   - maskedPan
 *   - msisdn
 * If the account is a multicurrency account currency code in "currency" is set to "XXX".
 *
**/
export declare class AccountDetails extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    balances?: Balance[];
    bban?: string;
    bic?: string;
    cashAccountType?: string;
    currency: string;
    details?: string;
    displayName?: string;
    iban?: string;
    linkedAccounts?: string;
    msisdn?: string;
    name?: string;
    ownerName?: string;
    product?: string;
    resourceId?: string;
    status?: AccountStatusEnum;
    usage?: AccountDetailsUsageEnum;
}
