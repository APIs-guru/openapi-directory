import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductCustomFieldFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_field_id" })
  customFieldId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;

  @SpeakeasyMetadata({ data: "json, name=value_id" })
  valueId?: string;
}
