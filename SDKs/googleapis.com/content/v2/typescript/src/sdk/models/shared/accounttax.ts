import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountTaxTaxRule } from "./accounttaxtaxrule";



// AccountTax
/** 
 * The tax settings of a merchant account. All methods require the admin role.
**/
export class AccountTax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: AccountTaxTaxRule })
  rules?: AccountTaxTaxRule[];
}
