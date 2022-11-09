import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObExternalAccountSubType1CodeEnum } from "./obexternalaccountsubtype1codeenum";
import { ObExternalAccountType1CodeEnum } from "./obexternalaccounttype1codeenum";
import { ObBranchAndFinancialInstitutionIdentification50 } from "./obbranchandfinancialinstitutionidentification50";
import { ObAccountStatus1CodeEnum } from "./obaccountstatus1codeenum";


// ObAccount6Account
/** 
 * Provides the details to identify an account.
**/
export class ObAccount6Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
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
  @Metadata({ data: "json, name=Account", elemType: shared.ObAccount6Account })
  account?: ObAccount6Account[];

  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=AccountSubType" })
  accountSubType?: ObExternalAccountSubType1CodeEnum;

  @Metadata({ data: "json, name=AccountType" })
  accountType?: ObExternalAccountType1CodeEnum;

  @Metadata({ data: "json, name=Currency" })
  currency?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=MaturityDate" })
  maturityDate?: Date;

  @Metadata({ data: "json, name=Nickname" })
  nickname?: string;

  @Metadata({ data: "json, name=OpeningDate" })
  openingDate?: Date;

  @Metadata({ data: "json, name=Servicer" })
  servicer?: ObBranchAndFinancialInstitutionIdentification50;

  @Metadata({ data: "json, name=Status" })
  status?: ObAccountStatus1CodeEnum;

  @Metadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime?: Date;

  @Metadata({ data: "json, name=SwitchStatus" })
  switchStatus?: string;
}
