package shared

// WidgetMarkup
// A widget is a UI element that presents texts, images, etc.
type WidgetMarkup struct {
	Buttons       []Button       `json:"buttons,omitempty"`
	Image         *Image         `json:"image,omitempty"`
	KeyValue      *KeyValue      `json:"keyValue,omitempty"`
	TextParagraph *TextParagraph `json:"textParagraph,omitempty"`
}
