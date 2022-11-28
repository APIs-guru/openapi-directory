package shared

type TextStyleBaselineOffsetEnum string

const (
	TextStyleBaselineOffsetEnumBaselineOffsetUnspecified TextStyleBaselineOffsetEnum = "BASELINE_OFFSET_UNSPECIFIED"
	TextStyleBaselineOffsetEnumNone                      TextStyleBaselineOffsetEnum = "NONE"
	TextStyleBaselineOffsetEnumSuperscript               TextStyleBaselineOffsetEnum = "SUPERSCRIPT"
	TextStyleBaselineOffsetEnumSubscript                 TextStyleBaselineOffsetEnum = "SUBSCRIPT"
)

// TextStyle
// Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor.
type TextStyle struct {
	BackgroundColor    *OptionalColor               `json:"backgroundColor,omitempty"`
	BaselineOffset     *TextStyleBaselineOffsetEnum `json:"baselineOffset,omitempty"`
	Bold               *bool                        `json:"bold,omitempty"`
	FontFamily         *string                      `json:"fontFamily,omitempty"`
	FontSize           *Dimension                   `json:"fontSize,omitempty"`
	ForegroundColor    *OptionalColor               `json:"foregroundColor,omitempty"`
	Italic             *bool                        `json:"italic,omitempty"`
	Link               *Link                        `json:"link,omitempty"`
	SmallCaps          *bool                        `json:"smallCaps,omitempty"`
	Strikethrough      *bool                        `json:"strikethrough,omitempty"`
	Underline          *bool                        `json:"underline,omitempty"`
	WeightedFontFamily *WeightedFontFamily          `json:"weightedFontFamily,omitempty"`
}
