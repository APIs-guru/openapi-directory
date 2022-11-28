import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
import { LocationInfo } from "./locationinfo";
import { Property } from "./property";
/**
 * Set of detected entity features.
**/
export declare class EntityAnnotation extends SpeakeasyBase {
    boundingPoly?: BoundingPoly;
    confidence?: number;
    description?: string;
    locale?: string;
    locations?: LocationInfo[];
    mid?: string;
    properties?: Property[];
    score?: number;
    topicality?: number;
}
