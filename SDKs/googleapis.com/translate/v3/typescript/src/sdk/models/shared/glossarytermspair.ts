import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GlossaryTerm } from "./glossaryterm";
import { GlossaryTerm } from "./glossaryterm";


// GlossaryTermsPair
/** 
 * Represents a single entry for an unidirectional glossary.
**/
export class GlossaryTermsPair extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceTerm" })
  sourceTerm?: GlossaryTerm;

  @Metadata({ data: "json, name=targetTerm" })
  targetTerm?: GlossaryTerm;
}
