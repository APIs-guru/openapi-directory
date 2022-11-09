import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountReference16Ch } from "./accountreference16ch";
import { AdditionalInformationAccess } from "./additionalinformationaccess";
import { AccountReference16Ch } from "./accountreference16ch";
import { AccountReference16Ch } from "./accountreference16ch";

export enum AccountAccessAllPsd2Enum {
    AllAccounts = "allAccounts"
,    AllAccountsWithOwnerName = "allAccountsWithOwnerName"
}

export enum AccountAccessAvailableAccountsEnum {
    AllAccounts = "allAccounts"
,    AllAccountsWithOwnerName = "allAccountsWithOwnerName"
}

export enum AccountAccessAvailableAccountsWithBalanceEnum {
    AllAccounts = "allAccounts"
,    AllAccountsWithOwnerName = "allAccountsWithOwnerName"
}


// AccountAccess
/** 
 * Requested access services for a consent.
 * 
**/
export class AccountAccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: shared.AccountReference16Ch })
  accounts?: AccountReference16Ch[];

  @Metadata({ data: "json, name=additionalInformation" })
  additionalInformation?: AdditionalInformationAccess;

  @Metadata({ data: "json, name=allPsd2" })
  allPsd2?: AccountAccessAllPsd2Enum;

  @Metadata({ data: "json, name=availableAccounts" })
  availableAccounts?: AccountAccessAvailableAccountsEnum;

  @Metadata({ data: "json, name=availableAccountsWithBalance" })
  availableAccountsWithBalance?: AccountAccessAvailableAccountsWithBalanceEnum;

  @Metadata({ data: "json, name=balances", elemType: shared.AccountReference16Ch })
  balances?: AccountReference16Ch[];

  @Metadata({ data: "json, name=restrictedTo" })
  restrictedTo?: string[];

  @Metadata({ data: "json, name=transactions", elemType: shared.AccountReference16Ch })
  transactions?: AccountReference16Ch[];
}
