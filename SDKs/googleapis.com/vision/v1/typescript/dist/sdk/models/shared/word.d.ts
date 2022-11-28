import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
import { TextProperty } from "./textproperty";
import { Symbol } from "./symbol";
/**
 * A word representation.
**/
export declare class Word extends SpeakeasyBase {
    boundingBox?: BoundingPoly;
    confidence?: number;
    property?: TextProperty;
    symbols?: Symbol[];
}
