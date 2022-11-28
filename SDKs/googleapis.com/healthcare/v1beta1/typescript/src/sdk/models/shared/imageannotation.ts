import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";



// ImageAnnotation
/** 
 * Image annotation.
**/
export class ImageAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingPolys", elemType: BoundingPoly })
  boundingPolys?: BoundingPoly[];

  @SpeakeasyMetadata({ data: "json, name=frameIndex" })
  frameIndex?: number;
}
