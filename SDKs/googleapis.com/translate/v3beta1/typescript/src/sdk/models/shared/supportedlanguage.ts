import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SupportedLanguage
/** 
 * A single supported language response corresponds to information related to one supported language.
**/
export class SupportedLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=supportSource" })
  supportSource?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportTarget" })
  supportTarget?: boolean;
}
