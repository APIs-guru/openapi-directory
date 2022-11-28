import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldFields } from "./customfieldfields";



export class CustomField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_field" })
  customField?: CustomFieldFields;
}
