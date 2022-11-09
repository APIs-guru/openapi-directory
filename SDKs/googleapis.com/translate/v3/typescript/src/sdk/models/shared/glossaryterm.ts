import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GlossaryTerm
/** 
 * Represents a single glossary term
**/
export class GlossaryTerm extends SpeakeasyBase {
  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
