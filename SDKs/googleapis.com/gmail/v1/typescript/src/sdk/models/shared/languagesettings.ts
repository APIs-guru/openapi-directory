import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LanguageSettings
/** 
 * Language settings for an account. These settings correspond to the "Language settings" feature in the web interface.
**/
export class LanguageSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayLanguage" })
  displayLanguage?: string;
}
