import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlossaryTerm } from "./glossaryterm";



// GlossaryTermsSet
/** 
 * Represents a single entry for an equivalent term set glossary. This is used for equivalent term sets where each term can be replaced by the other terms in the set.
**/
export class GlossaryTermsSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=terms", elemType: GlossaryTerm })
  terms?: GlossaryTerm[];
}
