import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObCashAccount5 } from "./obcashaccount5";
import { ObExternalAccountSubType1CodeEnum } from "./obexternalaccountsubtype1codeenum";
import { ObExternalAccountType1CodeEnum } from "./obexternalaccounttype1codeenum";
import { ObBranchAndFinancialInstitutionIdentification5 } from "./obbranchandfinancialinstitutionidentification5";


// ObAccount6
/** 
 * Unambiguous identification of the account to which credit and debit entries are made.
**/
export class ObAccount6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Account", elemType: shared.ObCashAccount5 })
  account?: ObCashAccount5[];

  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=AccountSubType" })
  accountSubType: ObExternalAccountSubType1CodeEnum;

  @Metadata({ data: "json, name=AccountType" })
  accountType: ObExternalAccountType1CodeEnum;

  @Metadata({ data: "json, name=Currency" })
  currency: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Nickname" })
  nickname?: string;

  @Metadata({ data: "json, name=OpeningDate" })
  openingDate?: Date;

  @Metadata({ data: "json, name=Servicer" })
  servicer?: ObBranchAndFinancialInstitutionIdentification5;
}
