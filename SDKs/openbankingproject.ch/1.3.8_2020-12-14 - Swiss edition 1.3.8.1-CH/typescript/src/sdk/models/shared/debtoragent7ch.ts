import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=bic" })
  bic?: string;

  @SpeakeasyMetadata({ data: "json, name=iid" })
  iid?: InstitutionalIdentification2;
}
