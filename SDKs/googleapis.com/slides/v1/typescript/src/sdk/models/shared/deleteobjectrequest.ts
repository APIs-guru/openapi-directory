import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteObjectRequest
/** 
 * Deletes an object, either pages or page elements, from the presentation.
**/
export class DeleteObjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectId" })
  objectId?: string;
}
