import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Position
/** 
 * A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.
**/
export class Position extends SpeakeasyBase {
  @Metadata({ data: "json, name=x" })
  x?: number;

  @Metadata({ data: "json, name=y" })
  y?: number;

  @Metadata({ data: "json, name=z" })
  z?: number;
}
