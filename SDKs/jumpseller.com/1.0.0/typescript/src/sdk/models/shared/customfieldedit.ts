import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldEditFields } from "./customfieldeditfields";



export class CustomFieldEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_field" })
  customField?: CustomFieldEditFields;
}
