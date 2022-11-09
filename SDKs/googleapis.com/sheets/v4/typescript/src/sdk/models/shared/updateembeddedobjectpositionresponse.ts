import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmbeddedObjectPosition } from "./embeddedobjectposition";


// UpdateEmbeddedObjectPositionResponse
/** 
 * The result of updating an embedded object's position.
**/
export class UpdateEmbeddedObjectPositionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=position" })
  position?: EmbeddedObjectPosition;
}
