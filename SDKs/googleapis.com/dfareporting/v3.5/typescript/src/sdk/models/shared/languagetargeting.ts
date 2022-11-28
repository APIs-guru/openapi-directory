import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Language } from "./language";



// LanguageTargeting
/** 
 * Language Targeting.
**/
export class LanguageTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languages", elemType: Language })
  languages?: Language[];
}
