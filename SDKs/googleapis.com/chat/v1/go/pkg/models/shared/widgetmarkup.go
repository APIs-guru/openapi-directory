package shared



type WidgetMarkup struct {
    Buttons []Button `json:"buttons,omitempty"`
    Image *Image `json:"image,omitempty"`
    KeyValue *KeyValue `json:"keyValue,omitempty"`
    TextParagraph *TextParagraph `json:"textParagraph,omitempty"`
    
}

