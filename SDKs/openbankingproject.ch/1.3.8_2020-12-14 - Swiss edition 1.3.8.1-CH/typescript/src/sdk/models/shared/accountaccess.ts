import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16Ch } from "./accountreference16ch";
import { AdditionalInformationAccess } from "./additionalinformationaccess";


export enum AccountAccessAllPsd2Enum {
    AllAccounts = "allAccounts",
    AllAccountsWithOwnerName = "allAccountsWithOwnerName"
}

export enum AccountAccessAvailableAccountsEnum {
    AllAccounts = "allAccounts",
    AllAccountsWithOwnerName = "allAccountsWithOwnerName"
}

export enum AccountAccessAvailableAccountsWithBalanceEnum {
    AllAccounts = "allAccounts",
    AllAccountsWithOwnerName = "allAccountsWithOwnerName"
}


// AccountAccess
/** 
 * Requested access services for a consent.
 * 
**/
export class AccountAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: AccountReference16Ch })
  accounts?: AccountReference16Ch[];

  @SpeakeasyMetadata({ data: "json, name=additionalInformation" })
  additionalInformation?: AdditionalInformationAccess;

  @SpeakeasyMetadata({ data: "json, name=allPsd2" })
  allPsd2?: AccountAccessAllPsd2Enum;

  @SpeakeasyMetadata({ data: "json, name=availableAccounts" })
  availableAccounts?: AccountAccessAvailableAccountsEnum;

  @SpeakeasyMetadata({ data: "json, name=availableAccountsWithBalance" })
  availableAccountsWithBalance?: AccountAccessAvailableAccountsWithBalanceEnum;

  @SpeakeasyMetadata({ data: "json, name=balances", elemType: AccountReference16Ch })
  balances?: AccountReference16Ch[];

  @SpeakeasyMetadata({ data: "json, name=restrictedTo" })
  restrictedTo?: string[];

  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: AccountReference16Ch })
  transactions?: AccountReference16Ch[];
}
