import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PaymentMethodFields } from "./paymentmethodfields";


export class PaymentMethod extends SpeakeasyBase {
  @Metadata({ data: "json, name=payment_method" })
  paymentMethod?: PaymentMethodFields;
}
