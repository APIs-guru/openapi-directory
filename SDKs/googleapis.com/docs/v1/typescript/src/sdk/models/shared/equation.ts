import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Equation
/** 
 * A ParagraphElement representing an equation.
**/
export class Equation extends SpeakeasyBase {
  @Metadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @Metadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];
}
