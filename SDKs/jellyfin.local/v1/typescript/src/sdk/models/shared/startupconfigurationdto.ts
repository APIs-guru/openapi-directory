import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartupConfigurationDto
/** 
 * The startup configuration DTO.
**/
export class StartupConfigurationDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=MetadataCountryCode" })
  metadataCountryCode?: string;

  @Metadata({ data: "json, name=PreferredMetadataLanguage" })
  preferredMetadataLanguage?: string;

  @Metadata({ data: "json, name=UICulture" })
  uiCulture?: string;
}
