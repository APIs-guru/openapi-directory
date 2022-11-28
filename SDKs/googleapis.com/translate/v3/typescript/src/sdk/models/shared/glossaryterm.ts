import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GlossaryTerm
/** 
 * Represents a single glossary term
**/
export class GlossaryTerm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
