import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
/**
 * A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.
**/
export declare class ReferenceImage extends SpeakeasyBase {
    boundingPolys?: BoundingPoly[];
    name?: string;
    uri?: string;
}
