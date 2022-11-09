import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Vertex
/** 
 * A 2D coordinate in an image. The origin is the top-left.
**/
export class Vertex extends SpeakeasyBase {
  @Metadata({ data: "json, name=x" })
  x?: number;

  @Metadata({ data: "json, name=y" })
  y?: number;
}
