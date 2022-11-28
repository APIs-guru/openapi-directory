import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Duplicates a slide or page element. When duplicating a slide, the duplicate slide will be created immediately following the specified slide. When duplicating a page element, the duplicate will be placed on the same page at the same position as the original.
**/
export declare class DuplicateObjectRequest extends SpeakeasyBase {
    objectId?: string;
    objectIds?: Map<string, string>;
}
