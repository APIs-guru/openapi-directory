import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
import { Paragraph } from "./paragraph";
import { TextProperty } from "./textproperty";
export declare enum BlockBlockTypeEnum {
    Unknown = "UNKNOWN",
    Text = "TEXT",
    Table = "TABLE",
    Picture = "PICTURE",
    Ruler = "RULER",
    Barcode = "BARCODE"
}
/**
 * Logical element on the page.
**/
export declare class Block extends SpeakeasyBase {
    blockType?: BlockBlockTypeEnum;
    boundingBox?: BoundingPoly;
    confidence?: number;
    paragraphs?: Paragraph[];
    property?: TextProperty;
}
