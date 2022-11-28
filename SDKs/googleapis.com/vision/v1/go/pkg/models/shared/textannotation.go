package shared

// TextAnnotation
// TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
type TextAnnotation struct {
	Pages []Page  `json:"pages,omitempty"`
	Text  *string `json:"text,omitempty"`
}
