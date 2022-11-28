import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CheckoutCustomFieldFields } from "./checkoutcustomfieldfields";



export class CheckoutCustomField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkout_custom_field" })
  checkoutCustomField?: CheckoutCustomFieldFields;
}
