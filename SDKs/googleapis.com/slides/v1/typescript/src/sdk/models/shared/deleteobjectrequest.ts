import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteObjectRequest
/** 
 * Deletes an object, either pages or page elements, from the presentation.
**/
export class DeleteObjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;
}
