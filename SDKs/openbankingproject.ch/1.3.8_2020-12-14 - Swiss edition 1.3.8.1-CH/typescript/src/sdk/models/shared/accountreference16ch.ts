import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountReference16Ch
/** 
 * Reference to an account by either
 *   * IBAN, of a payment accounts, or
 *   * otherAccountIdentification, for payment accounts if there is no IBAN
 * adapted from ISO pain.001.001.03.ch.02 CashAccount16-CH_IdTpCcy
 * 
**/
export class AccountReference16Ch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cashAccountType" })
  cashAccountType?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=iban" })
  iban?: string;

  @SpeakeasyMetadata({ data: "json, name=otherAccountIdentification" })
  otherAccountIdentification?: string;
}
