import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShippingMethodFields } from "./shippingmethodfields";



export class ShippingMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=shipping_method" })
  shippingMethod?: ShippingMethodFields;
}
