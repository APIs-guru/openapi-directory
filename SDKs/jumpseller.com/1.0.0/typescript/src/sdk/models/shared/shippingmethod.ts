import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShippingMethodFields } from "./shippingmethodfields";


export class ShippingMethod extends SpeakeasyBase {
  @Metadata({ data: "json, name=shipping_method" })
  shippingMethod?: ShippingMethodFields;
}
