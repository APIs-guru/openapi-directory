import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObExternalAccountSubType1CodeEnum } from "./obexternalaccountsubtype1codeenum";
import { ObExternalAccountType1CodeEnum } from "./obexternalaccounttype1codeenum";
import { ObBranchAndFinancialInstitutionIdentification50 } from "./obbranchandfinancialinstitutionidentification50";
import { ObAccountStatus1CodeEnum } from "./obaccountstatus1codeenum";



// ObAccount6Account
/** 
 * Provides the details to identify an account.
**/
export class ObAccount6Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObAccount6
/** 
 * Unambiguous identification of the account to which credit and debit entries are made. The following fields are optional only for accounts that are switched:
 * 
 *   * Data.Currency  
 *   * Data.AccountType  
 *   * Data.AccountSubType
 * 
 * For all other accounts, the fields must be populated by the ASPSP.
**/
export class ObAccount6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Account", elemType: ObAccount6Account })
  account?: ObAccount6Account[];

  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=AccountSubType" })
  accountSubType?: ObExternalAccountSubType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=AccountType" })
  accountType?: ObExternalAccountType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=MaturityDate" })
  maturityDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Nickname" })
  nickname?: string;

  @SpeakeasyMetadata({ data: "json, name=OpeningDate" })
  openingDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Servicer" })
  servicer?: ObBranchAndFinancialInstitutionIdentification50;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ObAccountStatus1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=SwitchStatus" })
  switchStatus?: string;
}
