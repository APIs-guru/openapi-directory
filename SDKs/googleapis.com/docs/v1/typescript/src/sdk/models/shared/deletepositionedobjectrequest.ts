import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeletePositionedObjectRequest
/** 
 * Deletes a PositionedObject from the document.
**/
export class DeletePositionedObjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;
}
