import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest
/** 
 * Request message for RenameTagTemplateFieldEnumValue.
**/
export class GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newEnumValueDisplayName" })
  newEnumValueDisplayName?: string;
}
