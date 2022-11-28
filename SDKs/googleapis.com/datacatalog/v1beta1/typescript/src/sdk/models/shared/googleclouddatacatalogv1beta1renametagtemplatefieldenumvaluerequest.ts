import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest
/** 
 * Request message for RenameTagTemplateFieldEnumValue.
**/
export class GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newEnumValueDisplayName" })
  newEnumValueDisplayName?: string;
}
