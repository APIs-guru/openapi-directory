import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdatePageElementAltTextRequest
/** 
 * Updates the alt text title and/or description of a page element.
**/
export class UpdatePageElementAltTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
