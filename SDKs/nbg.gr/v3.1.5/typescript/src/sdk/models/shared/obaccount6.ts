import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObCashAccount5 } from "./obcashaccount5";
import { ObExternalAccountSubType1CodeEnum } from "./obexternalaccountsubtype1codeenum";
import { ObExternalAccountType1CodeEnum } from "./obexternalaccounttype1codeenum";
import { ObBranchAndFinancialInstitutionIdentification5 } from "./obbranchandfinancialinstitutionidentification5";



// ObAccount6
/** 
 * Unambiguous identification of the account to which credit and debit entries are made.
**/
export class ObAccount6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Account", elemType: ObCashAccount5 })
  account?: ObCashAccount5[];

  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=AccountSubType" })
  accountSubType: ObExternalAccountSubType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=AccountType" })
  accountType: ObExternalAccountType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Nickname" })
  nickname?: string;

  @SpeakeasyMetadata({ data: "json, name=OpeningDate" })
  openingDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Servicer" })
  servicer?: ObBranchAndFinancialInstitutionIdentification5;
}
