import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
import { TextProperty } from "./textproperty";
import { Word } from "./word";
/**
 * Structural unit of text representing a number of words in certain order.
**/
export declare class Paragraph extends SpeakeasyBase {
    boundingBox?: BoundingPoly;
    confidence?: number;
    property?: TextProperty;
    words?: Word[];
}
