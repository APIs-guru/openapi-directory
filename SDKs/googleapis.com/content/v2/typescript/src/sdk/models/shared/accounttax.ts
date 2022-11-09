import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountTaxTaxRule } from "./accounttaxtaxrule";


// AccountTax
/** 
 * The tax settings of a merchant account. All methods require the admin role.
**/
export class AccountTax extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=rules", elemType: shared.AccountTaxTaxRule })
  rules?: AccountTaxTaxRule[];
}
