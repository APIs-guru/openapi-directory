import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BoundingPoly } from "./boundingpoly";
import { ObjectAnnotation } from "./objectannotation";
import { Result } from "./result";


// GroupedResult
/** 
 * Information about the products similar to a single product in a query image.
**/
export class GroupedResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingPoly" })
  boundingPoly?: BoundingPoly;

  @Metadata({ data: "json, name=objectAnnotations", elemType: shared.ObjectAnnotation })
  objectAnnotations?: ObjectAnnotation[];

  @Metadata({ data: "json, name=results", elemType: shared.Result })
  results?: Result[];
}
