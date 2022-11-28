import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteEmbeddedObjectRequest
/** 
 * Deletes the embedded object with the given ID.
**/
export class DeleteEmbeddedObjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: number;
}
