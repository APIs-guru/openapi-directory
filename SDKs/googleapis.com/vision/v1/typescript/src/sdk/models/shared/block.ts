import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
import { Paragraph } from "./paragraph";
import { TextProperty } from "./textproperty";


export enum BlockBlockTypeEnum {
    Unknown = "UNKNOWN",
    Text = "TEXT",
    Table = "TABLE",
    Picture = "PICTURE",
    Ruler = "RULER",
    Barcode = "BARCODE"
}


// Block
/** 
 * Logical element on the page.
**/
export class Block extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blockType" })
  blockType?: BlockBlockTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=paragraphs", elemType: Paragraph })
  paragraphs?: Paragraph[];

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: TextProperty;
}
