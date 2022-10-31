package shared

type CreateParagraphBulletsRequestBulletPresetEnum string

const (
	CreateParagraphBulletsRequestBulletPresetEnumBulletDiscCircleSquare            CreateParagraphBulletsRequestBulletPresetEnum = "BULLET_DISC_CIRCLE_SQUARE"
	CreateParagraphBulletsRequestBulletPresetEnumBulletDiamondxArrow3DSquare       CreateParagraphBulletsRequestBulletPresetEnum = "BULLET_DIAMONDX_ARROW3D_SQUARE"
	CreateParagraphBulletsRequestBulletPresetEnumBulletCheckbox                    CreateParagraphBulletsRequestBulletPresetEnum = "BULLET_CHECKBOX"
	CreateParagraphBulletsRequestBulletPresetEnumBulletArrowDiamondDisc            CreateParagraphBulletsRequestBulletPresetEnum = "BULLET_ARROW_DIAMOND_DISC"
	CreateParagraphBulletsRequestBulletPresetEnumBulletStarCircleSquare            CreateParagraphBulletsRequestBulletPresetEnum = "BULLET_STAR_CIRCLE_SQUARE"
	CreateParagraphBulletsRequestBulletPresetEnumBulletArrow3DCircleSquare         CreateParagraphBulletsRequestBulletPresetEnum = "BULLET_ARROW3D_CIRCLE_SQUARE"
	CreateParagraphBulletsRequestBulletPresetEnumBulletLefttriangleDiamondDisc     CreateParagraphBulletsRequestBulletPresetEnum = "BULLET_LEFTTRIANGLE_DIAMOND_DISC"
	CreateParagraphBulletsRequestBulletPresetEnumBulletDiamondxHollowdiamondSquare CreateParagraphBulletsRequestBulletPresetEnum = "BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE"
	CreateParagraphBulletsRequestBulletPresetEnumBulletDiamondCircleSquare         CreateParagraphBulletsRequestBulletPresetEnum = "BULLET_DIAMOND_CIRCLE_SQUARE"
	CreateParagraphBulletsRequestBulletPresetEnumNumberedDigitAlphaRoman           CreateParagraphBulletsRequestBulletPresetEnum = "NUMBERED_DIGIT_ALPHA_ROMAN"
	CreateParagraphBulletsRequestBulletPresetEnumNumberedDigitAlphaRomanParens     CreateParagraphBulletsRequestBulletPresetEnum = "NUMBERED_DIGIT_ALPHA_ROMAN_PARENS"
	CreateParagraphBulletsRequestBulletPresetEnumNumberedDigitNested               CreateParagraphBulletsRequestBulletPresetEnum = "NUMBERED_DIGIT_NESTED"
	CreateParagraphBulletsRequestBulletPresetEnumNumberedUpperalphaAlphaRoman      CreateParagraphBulletsRequestBulletPresetEnum = "NUMBERED_UPPERALPHA_ALPHA_ROMAN"
	CreateParagraphBulletsRequestBulletPresetEnumNumberedUpperromanUpperalphaDigit CreateParagraphBulletsRequestBulletPresetEnum = "NUMBERED_UPPERROMAN_UPPERALPHA_DIGIT"
	CreateParagraphBulletsRequestBulletPresetEnumNumberedZerodigitAlphaRoman       CreateParagraphBulletsRequestBulletPresetEnum = "NUMBERED_ZERODIGIT_ALPHA_ROMAN"
)

type CreateParagraphBulletsRequest struct {
	BulletPreset *CreateParagraphBulletsRequestBulletPresetEnum `json:"bulletPreset,omitempty"`
	CellLocation *TableCellLocation                             `json:"cellLocation,omitempty"`
	ObjectID     *string                                        `json:"objectId,omitempty"`
	TextRange    *Range                                         `json:"textRange,omitempty"`
}
