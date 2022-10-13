package shared

type NestingLevelBulletAlignmentEnum string

const (
	NestingLevelBulletAlignmentEnumBulletAlignmentUnspecified NestingLevelBulletAlignmentEnum = "BULLET_ALIGNMENT_UNSPECIFIED"
	NestingLevelBulletAlignmentEnumStart                      NestingLevelBulletAlignmentEnum = "START"
	NestingLevelBulletAlignmentEnumCenter                     NestingLevelBulletAlignmentEnum = "CENTER"
	NestingLevelBulletAlignmentEnumEnd                        NestingLevelBulletAlignmentEnum = "END"
)

type NestingLevelGlyphTypeEnum string

const (
	NestingLevelGlyphTypeEnumGlyphTypeUnspecified NestingLevelGlyphTypeEnum = "GLYPH_TYPE_UNSPECIFIED"
	NestingLevelGlyphTypeEnumNone                 NestingLevelGlyphTypeEnum = "NONE"
	NestingLevelGlyphTypeEnumDecimal              NestingLevelGlyphTypeEnum = "DECIMAL"
	NestingLevelGlyphTypeEnumZeroDecimal          NestingLevelGlyphTypeEnum = "ZERO_DECIMAL"
	NestingLevelGlyphTypeEnumUpperAlpha           NestingLevelGlyphTypeEnum = "UPPER_ALPHA"
	NestingLevelGlyphTypeEnumAlpha                NestingLevelGlyphTypeEnum = "ALPHA"
	NestingLevelGlyphTypeEnumUpperRoman           NestingLevelGlyphTypeEnum = "UPPER_ROMAN"
	NestingLevelGlyphTypeEnumRoman                NestingLevelGlyphTypeEnum = "ROMAN"
)

type NestingLevel struct {
	BulletAlignment *NestingLevelBulletAlignmentEnum `json:"bulletAlignment"`
	GlyphFormat     *string                          `json:"glyphFormat"`
	GlyphSymbol     *string                          `json:"glyphSymbol"`
	GlyphType       *NestingLevelGlyphTypeEnum       `json:"glyphType"`
	IndentFirstLine *Dimension                       `json:"indentFirstLine"`
	IndentStart     *Dimension                       `json:"indentStart"`
	StartNumber     *int32                           `json:"startNumber"`
	TextStyle       *TextStyle                       `json:"textStyle"`
}
