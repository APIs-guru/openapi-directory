import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StructuralElement } from "./structuralelement";



// TableOfContents
/** 
 * A StructuralElement representing a table of contents.
**/
export class TableOfContents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content", elemType: StructuralElement })
  content?: StructuralElement[];

  @SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];
}
