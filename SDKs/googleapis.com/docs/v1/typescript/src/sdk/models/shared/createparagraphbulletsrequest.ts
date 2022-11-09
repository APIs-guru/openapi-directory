import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Range } from "./range";

export enum CreateParagraphBulletsRequestBulletPresetEnum {
    BulletGlyphPresetUnspecified = "BULLET_GLYPH_PRESET_UNSPECIFIED"
,    BulletDiscCircleSquare = "BULLET_DISC_CIRCLE_SQUARE"
,    BulletDiamondxArrow3DSquare = "BULLET_DIAMONDX_ARROW3D_SQUARE"
,    BulletCheckbox = "BULLET_CHECKBOX"
,    BulletArrowDiamondDisc = "BULLET_ARROW_DIAMOND_DISC"
,    BulletStarCircleSquare = "BULLET_STAR_CIRCLE_SQUARE"
,    BulletArrow3DCircleSquare = "BULLET_ARROW3D_CIRCLE_SQUARE"
,    BulletLefttriangleDiamondDisc = "BULLET_LEFTTRIANGLE_DIAMOND_DISC"
,    BulletDiamondxHollowdiamondSquare = "BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE"
,    BulletDiamondCircleSquare = "BULLET_DIAMOND_CIRCLE_SQUARE"
,    NumberedDecimalAlphaRoman = "NUMBERED_DECIMAL_ALPHA_ROMAN"
,    NumberedDecimalAlphaRomanParens = "NUMBERED_DECIMAL_ALPHA_ROMAN_PARENS"
,    NumberedDecimalNested = "NUMBERED_DECIMAL_NESTED"
,    NumberedUpperalphaAlphaRoman = "NUMBERED_UPPERALPHA_ALPHA_ROMAN"
,    NumberedUpperromanUpperalphaDecimal = "NUMBERED_UPPERROMAN_UPPERALPHA_DECIMAL"
,    NumberedZerodecimalAlphaRoman = "NUMBERED_ZERODECIMAL_ALPHA_ROMAN"
}


// CreateParagraphBulletsRequest
/** 
 * Creates bullets for all of the paragraphs that overlap with the given range. The nesting level of each paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the text. If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs being updated are added to that preceding list.
**/
export class CreateParagraphBulletsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bulletPreset" })
  bulletPreset?: CreateParagraphBulletsRequestBulletPresetEnum;

  @Metadata({ data: "json, name=range" })
  range?: Range;
}
