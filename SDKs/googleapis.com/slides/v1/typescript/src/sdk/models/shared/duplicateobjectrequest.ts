import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DuplicateObjectRequest
/** 
 * Duplicates a slide or page element. When duplicating a slide, the duplicate slide will be created immediately following the specified slide. When duplicating a page element, the duplicate will be placed on the same page at the same position as the original.
**/
export class DuplicateObjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=objectIds" })
  objectIds?: Map<string, string>;
}
