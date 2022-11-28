import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
/**
 * Single crop hint that is used to generate a new crop when serving an image.
**/
export declare class CropHint extends SpeakeasyBase {
    boundingPoly?: BoundingPoly;
    confidence?: number;
    importanceFraction?: number;
}
