import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest
/** 
 * Request message for RenameTagTemplateFieldEnumValue.
**/
export class GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=newEnumValueDisplayName" })
  newEnumValueDisplayName?: string;
}
