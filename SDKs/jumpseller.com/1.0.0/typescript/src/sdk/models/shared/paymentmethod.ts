import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentMethodFields } from "./paymentmethodfields";



export class PaymentMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payment_method" })
  paymentMethod?: PaymentMethodFields;
}
