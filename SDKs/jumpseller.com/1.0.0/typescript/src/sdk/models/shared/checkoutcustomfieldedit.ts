import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CheckoutCustomFieldEditFields } from "./checkoutcustomfieldeditfields";


export class CheckoutCustomFieldEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkout_custom_field" })
  checkoutCustomField?: CheckoutCustomFieldEditFields;
}
