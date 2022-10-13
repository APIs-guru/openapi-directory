package shared

type TextStyleBaselineOffsetEnum string

const (
	TextStyleBaselineOffsetEnumBaselineOffsetUnspecified TextStyleBaselineOffsetEnum = "BASELINE_OFFSET_UNSPECIFIED"
	TextStyleBaselineOffsetEnumNone                      TextStyleBaselineOffsetEnum = "NONE"
	TextStyleBaselineOffsetEnumSuperscript               TextStyleBaselineOffsetEnum = "SUPERSCRIPT"
	TextStyleBaselineOffsetEnumSubscript                 TextStyleBaselineOffsetEnum = "SUBSCRIPT"
)

type TextStyle struct {
	BackgroundColor    *OptionalColor               `json:"backgroundColor"`
	BaselineOffset     *TextStyleBaselineOffsetEnum `json:"baselineOffset"`
	Bold               *bool                        `json:"bold"`
	FontSize           *Dimension                   `json:"fontSize"`
	ForegroundColor    *OptionalColor               `json:"foregroundColor"`
	Italic             *bool                        `json:"italic"`
	Link               *Link                        `json:"link"`
	SmallCaps          *bool                        `json:"smallCaps"`
	Strikethrough      *bool                        `json:"strikethrough"`
	Underline          *bool                        `json:"underline"`
	WeightedFontFamily *WeightedFontFamily          `json:"weightedFontFamily"`
}
