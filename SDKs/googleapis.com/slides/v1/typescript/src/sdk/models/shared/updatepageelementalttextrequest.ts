import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdatePageElementAltTextRequest
/** 
 * Updates the alt text title and/or description of a page element.
**/
export class UpdatePageElementAltTextRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
