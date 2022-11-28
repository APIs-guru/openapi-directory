import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { TextStyle } from "./textstyle";
export declare enum NestingLevelBulletAlignmentEnum {
    BulletAlignmentUnspecified = "BULLET_ALIGNMENT_UNSPECIFIED",
    Start = "START",
    Center = "CENTER",
    End = "END"
}
export declare enum NestingLevelGlyphTypeEnum {
    GlyphTypeUnspecified = "GLYPH_TYPE_UNSPECIFIED",
    None = "NONE",
    Decimal = "DECIMAL",
    ZeroDecimal = "ZERO_DECIMAL",
    UpperAlpha = "UPPER_ALPHA",
    Alpha = "ALPHA",
    UpperRoman = "UPPER_ROMAN",
    Roman = "ROMAN"
}
/**
 * Contains properties describing the look and feel of a list bullet at a given level of nesting.
**/
export declare class NestingLevel extends SpeakeasyBase {
    bulletAlignment?: NestingLevelBulletAlignmentEnum;
    glyphFormat?: string;
    glyphSymbol?: string;
    glyphType?: NestingLevelGlyphTypeEnum;
    indentFirstLine?: Dimension;
    indentStart?: Dimension;
    startNumber?: number;
    textStyle?: TextStyle;
}
