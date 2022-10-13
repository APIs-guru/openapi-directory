package shared

type WidgetMarkup struct {
	Buttons       []Button       `json:"buttons"`
	Image         *Image         `json:"image"`
	KeyValue      *KeyValue      `json:"keyValue"`
	TextParagraph *TextParagraph `json:"textParagraph"`
}
