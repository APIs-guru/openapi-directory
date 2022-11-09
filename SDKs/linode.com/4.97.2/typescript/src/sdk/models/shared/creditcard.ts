import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreditCard
/** 
 * An object representing the credit card information you have on file with
 * Linode to make Payments against your Account.
 * 
**/
export class CreditCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=card_number" })
  cardNumber: string;

  @Metadata({ data: "json, name=cvv" })
  cvv: string;

  @Metadata({ data: "json, name=expiry_month" })
  expiryMonth: number;

  @Metadata({ data: "json, name=expiry_year" })
  expiryYear: number;
}
