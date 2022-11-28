import { SpeakeasyBase } from "../../../internal/utils";
import { InstitutionalIdentification2 } from "./institutionalidentification2";
/**
 * Reference to an debtorAgent by either
 *   * BIC, of the debtor bank, or
 *   * IID, of the debtor bank
 * adapted from ISO pain.001.001.03.ch.02 FinancialInstitutionIdentification7-CH_BicOrClrId
 *
**/
export declare class DebtorAgent7Ch extends SpeakeasyBase {
    bic?: string;
    iid?: InstitutionalIdentification2;
}
