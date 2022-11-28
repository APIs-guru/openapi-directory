import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomerAdditionalFieldEditFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkout_custom_field_id" })
  checkoutCustomFieldId?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
