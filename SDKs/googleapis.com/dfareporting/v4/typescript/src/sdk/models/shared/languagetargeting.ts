import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Language } from "./language";


// LanguageTargeting
/** 
 * Language Targeting.
**/
export class LanguageTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=languages", elemType: shared.Language })
  languages?: Language[];
}
