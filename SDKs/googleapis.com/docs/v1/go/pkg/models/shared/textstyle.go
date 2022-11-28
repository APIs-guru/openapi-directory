package shared

type TextStyleBaselineOffsetEnum string

const (
	TextStyleBaselineOffsetEnumBaselineOffsetUnspecified TextStyleBaselineOffsetEnum = "BASELINE_OFFSET_UNSPECIFIED"
	TextStyleBaselineOffsetEnumNone                      TextStyleBaselineOffsetEnum = "NONE"
	TextStyleBaselineOffsetEnumSuperscript               TextStyleBaselineOffsetEnum = "SUPERSCRIPT"
	TextStyleBaselineOffsetEnumSubscript                 TextStyleBaselineOffsetEnum = "SUBSCRIPT"
)

// TextStyle
// Represents the styling that can be applied to text. Inherited text styles are represented as unset fields in this message. A text style's parent depends on where the text style is defined: * The TextStyle of text in a Paragraph inherits from the paragraph's corresponding named style type. * The TextStyle on a named style inherits from the normal text named style. * The TextStyle of the normal text named style inherits from the default text style in the Docs editor. * The TextStyle on a Paragraph element that's contained in a table may inherit its text style from the table style. If the text style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
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
