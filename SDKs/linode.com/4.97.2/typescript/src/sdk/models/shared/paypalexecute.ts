import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PayPalExecute
/** 
 * An object representing an execution of Payment to PayPal to capture the funds and credit your Linode Account.
 * 
**/
export class PayPalExecute extends SpeakeasyBase {
  @Metadata({ data: "json, name=payer_id" })
  payerId: string;

  @Metadata({ data: "json, name=payment_id" })
  paymentId: string;
}
