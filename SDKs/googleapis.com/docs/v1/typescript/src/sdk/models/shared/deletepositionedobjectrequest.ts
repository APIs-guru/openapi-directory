import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeletePositionedObjectRequest
/** 
 * Deletes a PositionedObject from the document.
**/
export class DeletePositionedObjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectId" })
  objectId?: string;
}
