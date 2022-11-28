import { SpeakeasyBase } from "../../../internal/utils";
import { PostalAddress6Ch } from "./postaladdress6ch";
import { InstitutionalIdentification2 } from "./institutionalidentification2";
/**
 * Reference to an creditorAgent by either
 *   * BIC, of the creditor bank, or
 *   * IID, of the creditor bank, or
 *   * IID and optional name and address of the creditor bank or
 *   * Name and address of the creditor bank
 * adapted from ISO pain.001.001.03.ch.02 FinancialInstitutionIdentification7-CH
 *
**/
export declare class CreditorAgent7Ch extends SpeakeasyBase {
    address?: PostalAddress6Ch;
    bic?: string;
    iid?: InstitutionalIdentification2;
    name?: string;
}
