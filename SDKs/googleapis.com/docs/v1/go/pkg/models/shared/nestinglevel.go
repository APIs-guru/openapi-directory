package shared




type NestingLevelBulletAlignmentEnum string

const (
    NestingLevelBulletAlignmentEnumBulletAlignmentUnspecified NestingLevelBulletAlignmentEnum = "BULLET_ALIGNMENT_UNSPECIFIED"
NestingLevelBulletAlignmentEnumStart NestingLevelBulletAlignmentEnum = "START"
NestingLevelBulletAlignmentEnumCenter NestingLevelBulletAlignmentEnum = "CENTER"
NestingLevelBulletAlignmentEnumEnd NestingLevelBulletAlignmentEnum = "END"
)



type NestingLevelGlyphTypeEnum string

const (
    NestingLevelGlyphTypeEnumGlyphTypeUnspecified NestingLevelGlyphTypeEnum = "GLYPH_TYPE_UNSPECIFIED"
NestingLevelGlyphTypeEnumNone NestingLevelGlyphTypeEnum = "NONE"
NestingLevelGlyphTypeEnumDecimal NestingLevelGlyphTypeEnum = "DECIMAL"
NestingLevelGlyphTypeEnumZeroDecimal NestingLevelGlyphTypeEnum = "ZERO_DECIMAL"
NestingLevelGlyphTypeEnumUpperAlpha NestingLevelGlyphTypeEnum = "UPPER_ALPHA"
NestingLevelGlyphTypeEnumAlpha NestingLevelGlyphTypeEnum = "ALPHA"
NestingLevelGlyphTypeEnumUpperRoman NestingLevelGlyphTypeEnum = "UPPER_ROMAN"
NestingLevelGlyphTypeEnumRoman NestingLevelGlyphTypeEnum = "ROMAN"
)


type NestingLevel struct {
    BulletAlignment *NestingLevelBulletAlignmentEnum `json:"bulletAlignment,omitempty"`
    GlyphFormat *string `json:"glyphFormat,omitempty"`
    GlyphSymbol *string `json:"glyphSymbol,omitempty"`
    GlyphType *NestingLevelGlyphTypeEnum `json:"glyphType,omitempty"`
    IndentFirstLine *Dimension `json:"indentFirstLine,omitempty"`
    IndentStart *Dimension `json:"indentStart,omitempty"`
    StartNumber *int32 `json:"startNumber,omitempty"`
    TextStyle *TextStyle `json:"textStyle,omitempty"`
    
}

