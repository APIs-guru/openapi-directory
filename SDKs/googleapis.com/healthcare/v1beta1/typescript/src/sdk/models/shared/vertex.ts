import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Vertex
/** 
 * A 2D coordinate in an image. The origin is the top-left.
**/
export class Vertex extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=x" })
  x?: number;

  @SpeakeasyMetadata({ data: "json, name=y" })
  y?: number;
}
