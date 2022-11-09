import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PaymentRequest
/** 
 * Payment object request.
**/
export class PaymentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cvv" })
  cvv?: string;

  @Metadata({ data: "json, name=usd" })
  usd: string;
}
