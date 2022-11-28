import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CheckoutCustomFieldEditFields } from "./checkoutcustomfieldeditfields";



export class CheckoutCustomFieldEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkout_custom_field" })
  checkoutCustomField?: CheckoutCustomFieldEditFields;
}
