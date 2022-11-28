package shared

type LineStyleTypeEnum string

const (
	LineStyleTypeEnumLineDashTypeUnspecified LineStyleTypeEnum = "LINE_DASH_TYPE_UNSPECIFIED"
	LineStyleTypeEnumInvisible               LineStyleTypeEnum = "INVISIBLE"
	LineStyleTypeEnumCustom                  LineStyleTypeEnum = "CUSTOM"
	LineStyleTypeEnumSolid                   LineStyleTypeEnum = "SOLID"
	LineStyleTypeEnumDotted                  LineStyleTypeEnum = "DOTTED"
	LineStyleTypeEnumMediumDashed            LineStyleTypeEnum = "MEDIUM_DASHED"
	LineStyleTypeEnumMediumDashedDotted      LineStyleTypeEnum = "MEDIUM_DASHED_DOTTED"
	LineStyleTypeEnumLongDashed              LineStyleTypeEnum = "LONG_DASHED"
	LineStyleTypeEnumLongDashedDotted        LineStyleTypeEnum = "LONG_DASHED_DOTTED"
)

// LineStyle
// Properties that describe the style of a line.
type LineStyle struct {
	Type  *LineStyleTypeEnum `json:"type,omitempty"`
	Width *int32             `json:"width,omitempty"`
}
