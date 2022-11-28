import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartupConfigurationDto
/** 
 * The startup configuration DTO.
**/
export class StartupConfigurationDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MetadataCountryCode" })
  metadataCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=PreferredMetadataLanguage" })
  preferredMetadataLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=UICulture" })
  uiCulture?: string;
}
