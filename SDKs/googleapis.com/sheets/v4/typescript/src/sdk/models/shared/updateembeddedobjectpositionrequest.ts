import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmbeddedObjectPosition } from "./embeddedobjectposition";


// UpdateEmbeddedObjectPositionRequest
/** 
 * Update an embedded object's position (such as a moving or resizing a chart or image).
**/
export class UpdateEmbeddedObjectPositionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=newPosition" })
  newPosition?: EmbeddedObjectPosition;

  @Metadata({ data: "json, name=objectId" })
  objectId?: number;
}
