import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
/**
 * Image annotation.
**/
export declare class ImageAnnotation extends SpeakeasyBase {
    boundingPolys?: BoundingPoly[];
    frameIndex?: number;
}
