import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";



// ReferenceImage
/** 
 * A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.
**/
export class ReferenceImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingPolys", elemType: BoundingPoly })
  boundingPolys?: BoundingPoly[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
