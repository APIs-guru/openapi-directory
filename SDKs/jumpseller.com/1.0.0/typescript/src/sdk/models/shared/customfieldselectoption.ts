import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomFieldSelectOptionFields } from "./customfieldselectoptionfields";


export class CustomFieldSelectOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom_field_select_option" })
  customFieldSelectOption?: CustomFieldSelectOptionFields;
}
