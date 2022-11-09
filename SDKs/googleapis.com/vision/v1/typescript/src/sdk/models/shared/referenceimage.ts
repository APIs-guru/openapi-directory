import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BoundingPoly } from "./boundingpoly";


// ReferenceImage
/** 
 * A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.
**/
export class ReferenceImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingPolys", elemType: shared.BoundingPoly })
  boundingPolys?: BoundingPoly[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
