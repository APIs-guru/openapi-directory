import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
/**
 * Set of detected objects with bounding boxes.
**/
export declare class LocalizedObjectAnnotation extends SpeakeasyBase {
    boundingPoly?: BoundingPoly;
    languageCode?: string;
    mid?: string;
    name?: string;
    score?: number;
}
