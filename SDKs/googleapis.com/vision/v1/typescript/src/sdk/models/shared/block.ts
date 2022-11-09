import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BoundingPoly } from "./boundingpoly";
import { Paragraph } from "./paragraph";
import { TextProperty } from "./textproperty";

export enum BlockBlockTypeEnum {
    Unknown = "UNKNOWN"
,    Text = "TEXT"
,    Table = "TABLE"
,    Picture = "PICTURE"
,    Ruler = "RULER"
,    Barcode = "BARCODE"
}


// Block
/** 
 * Logical element on the page.
**/
export class Block extends SpeakeasyBase {
  @Metadata({ data: "json, name=blockType" })
  blockType?: BlockBlockTypeEnum;

  @Metadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingPoly;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=paragraphs", elemType: shared.Paragraph })
  paragraphs?: Paragraph[];

  @Metadata({ data: "json, name=property" })
  property?: TextProperty;
}
