package shared

type CreateParagraphBulletsRequestBulletPresetEnum string

const (
	CreateParagraphBulletsRequestBulletPresetEnumBulletGlyphPresetUnspecified        CreateParagraphBulletsRequestBulletPresetEnum = "BULLET_GLYPH_PRESET_UNSPECIFIED"
	CreateParagraphBulletsRequestBulletPresetEnumBulletDiscCircleSquare              CreateParagraphBulletsRequestBulletPresetEnum = "BULLET_DISC_CIRCLE_SQUARE"
	CreateParagraphBulletsRequestBulletPresetEnumBulletDiamondxArrow3DSquare         CreateParagraphBulletsRequestBulletPresetEnum = "BULLET_DIAMONDX_ARROW3D_SQUARE"
	CreateParagraphBulletsRequestBulletPresetEnumBulletCheckbox                      CreateParagraphBulletsRequestBulletPresetEnum = "BULLET_CHECKBOX"
	CreateParagraphBulletsRequestBulletPresetEnumBulletArrowDiamondDisc              CreateParagraphBulletsRequestBulletPresetEnum = "BULLET_ARROW_DIAMOND_DISC"
	CreateParagraphBulletsRequestBulletPresetEnumBulletStarCircleSquare              CreateParagraphBulletsRequestBulletPresetEnum = "BULLET_STAR_CIRCLE_SQUARE"
	CreateParagraphBulletsRequestBulletPresetEnumBulletArrow3DCircleSquare           CreateParagraphBulletsRequestBulletPresetEnum = "BULLET_ARROW3D_CIRCLE_SQUARE"
	CreateParagraphBulletsRequestBulletPresetEnumBulletLefttriangleDiamondDisc       CreateParagraphBulletsRequestBulletPresetEnum = "BULLET_LEFTTRIANGLE_DIAMOND_DISC"
	CreateParagraphBulletsRequestBulletPresetEnumBulletDiamondxHollowdiamondSquare   CreateParagraphBulletsRequestBulletPresetEnum = "BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE"
	CreateParagraphBulletsRequestBulletPresetEnumBulletDiamondCircleSquare           CreateParagraphBulletsRequestBulletPresetEnum = "BULLET_DIAMOND_CIRCLE_SQUARE"
	CreateParagraphBulletsRequestBulletPresetEnumNumberedDecimalAlphaRoman           CreateParagraphBulletsRequestBulletPresetEnum = "NUMBERED_DECIMAL_ALPHA_ROMAN"
	CreateParagraphBulletsRequestBulletPresetEnumNumberedDecimalAlphaRomanParens     CreateParagraphBulletsRequestBulletPresetEnum = "NUMBERED_DECIMAL_ALPHA_ROMAN_PARENS"
	CreateParagraphBulletsRequestBulletPresetEnumNumberedDecimalNested               CreateParagraphBulletsRequestBulletPresetEnum = "NUMBERED_DECIMAL_NESTED"
	CreateParagraphBulletsRequestBulletPresetEnumNumberedUpperalphaAlphaRoman        CreateParagraphBulletsRequestBulletPresetEnum = "NUMBERED_UPPERALPHA_ALPHA_ROMAN"
	CreateParagraphBulletsRequestBulletPresetEnumNumberedUpperromanUpperalphaDecimal CreateParagraphBulletsRequestBulletPresetEnum = "NUMBERED_UPPERROMAN_UPPERALPHA_DECIMAL"
	CreateParagraphBulletsRequestBulletPresetEnumNumberedZerodecimalAlphaRoman       CreateParagraphBulletsRequestBulletPresetEnum = "NUMBERED_ZERODECIMAL_ALPHA_ROMAN"
)

// CreateParagraphBulletsRequest
// Creates bullets for all of the paragraphs that overlap with the given range. The nesting level of each paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the text. If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs being updated are added to that preceding list.
type CreateParagraphBulletsRequest struct {
	BulletPreset *CreateParagraphBulletsRequestBulletPresetEnum `json:"bulletPreset,omitempty"`
	Range        *Range                                         `json:"range,omitempty"`
}
