import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaymentRequest
/** 
 * Payment object request.
**/
export class PaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cvv" })
  cvv?: string;

  @SpeakeasyMetadata({ data: "json, name=usd" })
  usd: string;
}
