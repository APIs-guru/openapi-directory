import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StructuralElement } from "./structuralelement";


// TableOfContents
/** 
 * A StructuralElement representing a table of contents.
**/
export class TableOfContents extends SpeakeasyBase {
  @Metadata({ data: "json, name=content", elemType: shared.StructuralElement })
  content?: StructuralElement[];

  @Metadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @Metadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];
}
