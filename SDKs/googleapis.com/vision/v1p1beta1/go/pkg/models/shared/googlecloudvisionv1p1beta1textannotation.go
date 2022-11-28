package shared

// GoogleCloudVisionV1p1beta1TextAnnotation
// TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
type GoogleCloudVisionV1p1beta1TextAnnotation struct {
	Pages []GoogleCloudVisionV1p1beta1Page `json:"pages,omitempty"`
	Text  *string                          `json:"text,omitempty"`
}
