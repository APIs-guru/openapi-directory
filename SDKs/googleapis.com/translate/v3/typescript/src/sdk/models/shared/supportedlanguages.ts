import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SupportedLanguage } from "./supportedlanguage";



// SupportedLanguages
/** 
 * The response message for discovering supported languages.
**/
export class SupportedLanguages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languages", elemType: SupportedLanguage })
  languages?: SupportedLanguage[];
}
