import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Equation
/** 
 * A ParagraphElement representing an equation.
**/
export class Equation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];
}
