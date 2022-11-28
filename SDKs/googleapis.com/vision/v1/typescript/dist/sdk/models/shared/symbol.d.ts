import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
import { TextProperty } from "./textproperty";
/**
 * A single symbol representation.
**/
export declare class Symbol extends SpeakeasyBase {
    boundingBox?: BoundingPoly;
    confidence?: number;
    property?: TextProperty;
    text?: string;
}
