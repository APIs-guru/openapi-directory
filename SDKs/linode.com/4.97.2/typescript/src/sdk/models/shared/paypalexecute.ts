import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PayPalExecute
/** 
 * An object representing an execution of Payment to PayPal to capture the funds and credit your Linode Account.
 * 
**/
export class PayPalExecute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payer_id" })
  payerId: string;

  @SpeakeasyMetadata({ data: "json, name=payment_id" })
  paymentId: string;
}
