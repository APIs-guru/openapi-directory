import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomerAdditionalFieldEditFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkout_custom_field_id" })
  checkoutCustomFieldId?: number;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
