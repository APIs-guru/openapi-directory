import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GlossaryTerm } from "./glossaryterm";


// GlossaryTermsSet
/** 
 * Represents a single entry for an equivalent term set glossary. This is used for equivalent term sets where each term can be replaced by the other terms in the set.
**/
export class GlossaryTermsSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=terms", elemType: shared.GlossaryTerm })
  terms?: GlossaryTerm[];
}
