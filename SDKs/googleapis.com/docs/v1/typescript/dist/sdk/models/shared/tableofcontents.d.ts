import { SpeakeasyBase } from "../../../internal/utils";
import { StructuralElement } from "./structuralelement";
/**
 * A StructuralElement representing a table of contents.
**/
export declare class TableOfContents extends SpeakeasyBase {
    content?: StructuralElement[];
    suggestedDeletionIds?: string[];
    suggestedInsertionIds?: string[];
}
