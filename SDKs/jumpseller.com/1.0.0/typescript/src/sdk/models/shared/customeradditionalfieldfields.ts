import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomerAdditionalFieldFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=area" })
  area?: string;

  @SpeakeasyMetadata({ data: "json, name=checkout_custom_field_id" })
  checkoutCustomFieldId?: number;

  @SpeakeasyMetadata({ data: "json, name=customer_id" })
  customerId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
