package shared

type TextStyleBaselineOffsetEnum string

const (
	TextStyleBaselineOffsetEnumBaselineOffsetUnspecified TextStyleBaselineOffsetEnum = "BASELINE_OFFSET_UNSPECIFIED"
	TextStyleBaselineOffsetEnumNone                      TextStyleBaselineOffsetEnum = "NONE"
	TextStyleBaselineOffsetEnumSuperscript               TextStyleBaselineOffsetEnum = "SUPERSCRIPT"
	TextStyleBaselineOffsetEnumSubscript                 TextStyleBaselineOffsetEnum = "SUBSCRIPT"
)

type TextStyle struct {
	BackgroundColor    *OptionalColor               `json:"backgroundColor,omitempty"`
	BaselineOffset     *TextStyleBaselineOffsetEnum `json:"baselineOffset,omitempty"`
	Bold               *bool                        `json:"bold,omitempty"`
	FontSize           *Dimension                   `json:"fontSize,omitempty"`
	ForegroundColor    *OptionalColor               `json:"foregroundColor,omitempty"`
	Italic             *bool                        `json:"italic,omitempty"`
	Link               *Link                        `json:"link,omitempty"`
	SmallCaps          *bool                        `json:"smallCaps,omitempty"`
	Strikethrough      *bool                        `json:"strikethrough,omitempty"`
	Underline          *bool                        `json:"underline,omitempty"`
	WeightedFontFamily *WeightedFontFamily          `json:"weightedFontFamily,omitempty"`
}
