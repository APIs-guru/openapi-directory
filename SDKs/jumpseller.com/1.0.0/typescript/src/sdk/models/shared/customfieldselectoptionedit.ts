import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldSelectOptionEditFields } from "./customfieldselectoptioneditfields";



export class CustomFieldSelectOptionEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_field_select_option" })
  customFieldSelectOption?: CustomFieldSelectOptionEditFields;
}
