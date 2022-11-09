import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SupportedLanguage } from "./supportedlanguage";


// SupportedLanguages
/** 
 * The response message for discovering supported languages.
**/
export class SupportedLanguages extends SpeakeasyBase {
  @Metadata({ data: "json, name=languages", elemType: shared.SupportedLanguage })
  languages?: SupportedLanguage[];
}
