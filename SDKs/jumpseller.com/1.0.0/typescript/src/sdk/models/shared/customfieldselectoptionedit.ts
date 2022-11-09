import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomFieldSelectOptionEditFields } from "./customfieldselectoptioneditfields";


export class CustomFieldSelectOptionEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom_field_select_option" })
  customFieldSelectOption?: CustomFieldSelectOptionEditFields;
}
