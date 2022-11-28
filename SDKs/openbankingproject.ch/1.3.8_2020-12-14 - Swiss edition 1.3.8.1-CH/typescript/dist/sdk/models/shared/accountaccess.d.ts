import { SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16Ch } from "./accountreference16ch";
import { AdditionalInformationAccess } from "./additionalinformationaccess";
export declare enum AccountAccessAllPsd2Enum {
    AllAccounts = "allAccounts",
    AllAccountsWithOwnerName = "allAccountsWithOwnerName"
}
export declare enum AccountAccessAvailableAccountsEnum {
    AllAccounts = "allAccounts",
    AllAccountsWithOwnerName = "allAccountsWithOwnerName"
}
export declare enum AccountAccessAvailableAccountsWithBalanceEnum {
    AllAccounts = "allAccounts",
    AllAccountsWithOwnerName = "allAccountsWithOwnerName"
}
/**
 * Requested access services for a consent.
 *
**/
export declare class AccountAccess extends SpeakeasyBase {
    accounts?: AccountReference16Ch[];
    additionalInformation?: AdditionalInformationAccess;
    allPsd2?: AccountAccessAllPsd2Enum;
    availableAccounts?: AccountAccessAvailableAccountsEnum;
    availableAccountsWithBalance?: AccountAccessAvailableAccountsWithBalanceEnum;
    balances?: AccountReference16Ch[];
    restrictedTo?: string[];
    transactions?: AccountReference16Ch[];
}
