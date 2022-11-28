import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectPosition } from "./embeddedobjectposition";



// UpdateEmbeddedObjectPositionResponse
/** 
 * The result of updating an embedded object's position.
**/
export class UpdateEmbeddedObjectPositionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: EmbeddedObjectPosition;
}
