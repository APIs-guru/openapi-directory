import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LanguageSettings
/** 
 * Language settings for an account. These settings correspond to the "Language settings" feature in the web interface.
**/
export class LanguageSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayLanguage" })
  displayLanguage?: string;
}
