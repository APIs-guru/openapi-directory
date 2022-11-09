import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SupportedLanguage
/** 
 * A single supported language response corresponds to information related to one supported language.
**/
export class SupportedLanguage extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=supportSource" })
  supportSource?: boolean;

  @Metadata({ data: "json, name=supportTarget" })
  supportTarget?: boolean;
}
