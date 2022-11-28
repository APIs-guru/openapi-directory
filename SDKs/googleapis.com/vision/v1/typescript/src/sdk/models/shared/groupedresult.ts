import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
import { ObjectAnnotation } from "./objectannotation";
import { Result } from "./result";



// GroupedResult
/** 
 * Information about the products similar to a single product in a query image.
**/
export class GroupedResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingPoly" })
  boundingPoly?: BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=objectAnnotations", elemType: ObjectAnnotation })
  objectAnnotations?: ObjectAnnotation[];

  @SpeakeasyMetadata({ data: "json, name=results", elemType: Result })
  results?: Result[];
}
