import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CheckoutCustomFieldFields } from "./checkoutcustomfieldfields";


export class CheckoutCustomField extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkout_custom_field" })
  checkoutCustomField?: CheckoutCustomFieldFields;
}
