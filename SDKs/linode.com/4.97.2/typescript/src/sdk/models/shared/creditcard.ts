import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreditCard
/** 
 * An object representing the credit card information you have on file with
 * Linode to make Payments against your Account.
 * 
**/
export class CreditCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=card_number" })
  cardNumber: string;

  @SpeakeasyMetadata({ data: "json, name=cvv" })
  cvv: string;

  @SpeakeasyMetadata({ data: "json, name=expiry_month" })
  expiryMonth: number;

  @SpeakeasyMetadata({ data: "json, name=expiry_year" })
  expiryYear: number;
}
