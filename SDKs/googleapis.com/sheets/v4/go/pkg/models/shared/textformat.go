package shared

type TextFormat struct {
	Bold                 *bool       `json:"bold"`
	FontFamily           *string     `json:"fontFamily"`
	FontSize             *int32      `json:"fontSize"`
	ForegroundColor      *Color      `json:"foregroundColor"`
	ForegroundColorStyle *ColorStyle `json:"foregroundColorStyle"`
	Italic               *bool       `json:"italic"`
	Link                 *Link       `json:"link"`
	Strikethrough        *bool       `json:"strikethrough"`
	Underline            *bool       `json:"underline"`
}
