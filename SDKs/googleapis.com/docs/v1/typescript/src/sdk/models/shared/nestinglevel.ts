import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { TextStyle } from "./textstyle";


export enum NestingLevelBulletAlignmentEnum {
    BulletAlignmentUnspecified = "BULLET_ALIGNMENT_UNSPECIFIED",
    Start = "START",
    Center = "CENTER",
    End = "END"
}

export enum NestingLevelGlyphTypeEnum {
    GlyphTypeUnspecified = "GLYPH_TYPE_UNSPECIFIED",
    None = "NONE",
    Decimal = "DECIMAL",
    ZeroDecimal = "ZERO_DECIMAL",
    UpperAlpha = "UPPER_ALPHA",
    Alpha = "ALPHA",
    UpperRoman = "UPPER_ROMAN",
    Roman = "ROMAN"
}


// NestingLevel
/** 
 * Contains properties describing the look and feel of a list bullet at a given level of nesting.
**/
export class NestingLevel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bulletAlignment" })
  bulletAlignment?: NestingLevelBulletAlignmentEnum;

  @SpeakeasyMetadata({ data: "json, name=glyphFormat" })
  glyphFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=glyphSymbol" })
  glyphSymbol?: string;

  @SpeakeasyMetadata({ data: "json, name=glyphType" })
  glyphType?: NestingLevelGlyphTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=indentFirstLine" })
  indentFirstLine?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=indentStart" })
  indentStart?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=startNumber" })
  startNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;
}
