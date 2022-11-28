import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
import { ObjectAnnotation } from "./objectannotation";
import { Result } from "./result";
/**
 * Information about the products similar to a single product in a query image.
**/
export declare class GroupedResult extends SpeakeasyBase {
    boundingPoly?: BoundingPoly;
    objectAnnotations?: ObjectAnnotation[];
    results?: Result[];
}
