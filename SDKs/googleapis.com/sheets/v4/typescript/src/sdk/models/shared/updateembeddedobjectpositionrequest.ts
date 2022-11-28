import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectPosition } from "./embeddedobjectposition";



// UpdateEmbeddedObjectPositionRequest
/** 
 * Update an embedded object's position (such as a moving or resizing a chart or image).
**/
export class UpdateEmbeddedObjectPositionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=newPosition" })
  newPosition?: EmbeddedObjectPosition;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: number;
}
