import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GlossaryTerm } from "./glossaryterm";



// GlossaryTermsPair
/** 
 * Represents a single entry for an unidirectional glossary.
**/
export class GlossaryTermsPair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceTerm" })
  sourceTerm?: GlossaryTerm;

  @SpeakeasyMetadata({ data: "json, name=targetTerm" })
  targetTerm?: GlossaryTerm;
}
