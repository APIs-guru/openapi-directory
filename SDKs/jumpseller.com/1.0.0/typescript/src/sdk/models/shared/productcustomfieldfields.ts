import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductCustomFieldFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom_field_id" })
  customFieldId?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;

  @Metadata({ data: "json, name=value_id" })
  valueId?: string;
}
