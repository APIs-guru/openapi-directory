import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomFieldEditFields } from "./customfieldeditfields";


export class CustomFieldEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom_field" })
  customField?: CustomFieldEditFields;
}
