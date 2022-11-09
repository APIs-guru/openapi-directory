import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomFieldFields } from "./customfieldfields";


export class CustomField extends SpeakeasyBase {
  @Metadata({ data: "json, name=custom_field" })
  customField?: CustomFieldFields;
}
