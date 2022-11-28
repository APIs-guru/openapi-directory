import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostalAddress6Ch } from "./postaladdress6ch";
import { InstitutionalIdentification2 } from "./institutionalidentification2";



// CreditorAgent7Ch
/** 
 * Reference to an creditorAgent by either
 *   * BIC, of the creditor bank, or
 *   * IID, of the creditor bank, or
 *   * IID and optional name and address of the creditor bank or
 *   * Name and address of the creditor bank
 * adapted from ISO pain.001.001.03.ch.02 FinancialInstitutionIdentification7-CH
 * 
**/
export class CreditorAgent7Ch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PostalAddress6Ch;

  @SpeakeasyMetadata({ data: "json, name=bic" })
  bic?: string;

  @SpeakeasyMetadata({ data: "json, name=iid" })
  iid?: InstitutionalIdentification2;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
