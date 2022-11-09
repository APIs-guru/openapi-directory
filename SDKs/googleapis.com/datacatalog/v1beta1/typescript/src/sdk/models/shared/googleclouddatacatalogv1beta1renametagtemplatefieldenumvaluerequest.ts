import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest
/** 
 * Request message for RenameTagTemplateFieldEnumValue.
**/
export class GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=newEnumValueDisplayName" })
  newEnumValueDisplayName?: string;
}
