import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteEmbeddedObjectRequest
/** 
 * Deletes the embedded object with the given ID.
**/
export class DeleteEmbeddedObjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectId" })
  objectId?: number;
}
