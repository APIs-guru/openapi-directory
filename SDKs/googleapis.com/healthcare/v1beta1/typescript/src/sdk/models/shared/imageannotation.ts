import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BoundingPoly } from "./boundingpoly";


// ImageAnnotation
/** 
 * Image annotation.
**/
export class ImageAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingPolys", elemType: shared.BoundingPoly })
  boundingPolys?: BoundingPoly[];

  @Metadata({ data: "json, name=frameIndex" })
  frameIndex?: number;
}
