package shared

// TextFormat
// The format of a run of text in a cell. Absent values indicate that the field isn't specified.
type TextFormat struct {
	Bold                 *bool       `json:"bold,omitempty"`
	FontFamily           *string     `json:"fontFamily,omitempty"`
	FontSize             *int32      `json:"fontSize,omitempty"`
	ForegroundColor      *Color      `json:"foregroundColor,omitempty"`
	ForegroundColorStyle *ColorStyle `json:"foregroundColorStyle,omitempty"`
	Italic               *bool       `json:"italic,omitempty"`
	Link                 *Link       `json:"link,omitempty"`
	Strikethrough        *bool       `json:"strikethrough,omitempty"`
	Underline            *bool       `json:"underline,omitempty"`
}
