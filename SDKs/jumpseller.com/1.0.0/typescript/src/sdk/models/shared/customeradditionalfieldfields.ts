import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomerAdditionalFieldFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=area" })
  area?: string;

  @Metadata({ data: "json, name=checkout_custom_field_id" })
  checkoutCustomFieldId?: number;

  @Metadata({ data: "json, name=customer_id" })
  customerId?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
