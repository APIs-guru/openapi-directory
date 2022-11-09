import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountReference16Ch
/** 
 * Reference to an account by either
 *   * IBAN, of a payment accounts, or
 *   * otherAccountIdentification, for payment accounts if there is no IBAN
 * adapted from ISO pain.001.001.03.ch.02 CashAccount16-CH_IdTpCcy
 * 
**/
export class AccountReference16Ch extends SpeakeasyBase {
  @Metadata({ data: "json, name=cashAccountType" })
  cashAccountType?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=iban" })
  iban?: string;

  @Metadata({ data: "json, name=otherAccountIdentification" })
  otherAccountIdentification?: string;
}
