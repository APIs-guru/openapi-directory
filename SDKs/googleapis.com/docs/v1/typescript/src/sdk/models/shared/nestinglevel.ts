import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Dimension } from "./dimension";
import { Dimension } from "./dimension";
import { TextStyle } from "./textstyle";

export enum NestingLevelBulletAlignmentEnum {
    BulletAlignmentUnspecified = "BULLET_ALIGNMENT_UNSPECIFIED"
,    Start = "START"
,    Center = "CENTER"
,    End = "END"
}

export enum NestingLevelGlyphTypeEnum {
    GlyphTypeUnspecified = "GLYPH_TYPE_UNSPECIFIED"
,    None = "NONE"
,    Decimal = "DECIMAL"
,    ZeroDecimal = "ZERO_DECIMAL"
,    UpperAlpha = "UPPER_ALPHA"
,    Alpha = "ALPHA"
,    UpperRoman = "UPPER_ROMAN"
,    Roman = "ROMAN"
}


// NestingLevel
/** 
 * Contains properties describing the look and feel of a list bullet at a given level of nesting.
**/
export class NestingLevel extends SpeakeasyBase {
  @Metadata({ data: "json, name=bulletAlignment" })
  bulletAlignment?: NestingLevelBulletAlignmentEnum;

  @Metadata({ data: "json, name=glyphFormat" })
  glyphFormat?: string;

  @Metadata({ data: "json, name=glyphSymbol" })
  glyphSymbol?: string;

  @Metadata({ data: "json, name=glyphType" })
  glyphType?: NestingLevelGlyphTypeEnum;

  @Metadata({ data: "json, name=indentFirstLine" })
  indentFirstLine?: Dimension;

  @Metadata({ data: "json, name=indentStart" })
  indentStart?: Dimension;

  @Metadata({ data: "json, name=startNumber" })
  startNumber?: number;

  @Metadata({ data: "json, name=textStyle" })
  textStyle?: TextStyle;
}
