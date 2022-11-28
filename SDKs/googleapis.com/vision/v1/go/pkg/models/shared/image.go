package shared

// Image
// Client image to perform Google Cloud Vision API tasks over.
type Image struct {
	Content *string      `json:"content,omitempty"`
	Source  *ImageSource `json:"source,omitempty"`
}
