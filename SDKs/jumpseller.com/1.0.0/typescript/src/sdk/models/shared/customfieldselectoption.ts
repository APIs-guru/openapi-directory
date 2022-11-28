import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldSelectOptionFields } from "./customfieldselectoptionfields";



export class CustomFieldSelectOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_field_select_option" })
  customFieldSelectOption?: CustomFieldSelectOptionFields;
}
