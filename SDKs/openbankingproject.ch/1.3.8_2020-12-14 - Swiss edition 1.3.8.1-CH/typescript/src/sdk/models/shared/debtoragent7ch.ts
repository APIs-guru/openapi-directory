import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstitutionalIdentification2 } from "./institutionalidentification2";


// DebtorAgent7Ch
/** 
 * Reference to an debtorAgent by either
 *   * BIC, of the debtor bank, or
 *   * IID, of the debtor bank
 * adapted from ISO pain.001.001.03.ch.02 FinancialInstitutionIdentification7-CH_BicOrClrId
 * 
**/
export class DebtorAgent7Ch extends SpeakeasyBase {
  @Metadata({ data: "json, name=bic" })
  bic?: string;

  @Metadata({ data: "json, name=iid" })
  iid?: InstitutionalIdentification2;
}
