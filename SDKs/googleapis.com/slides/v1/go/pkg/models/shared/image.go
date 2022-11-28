package shared

// Image
// A PageElement kind representing an image.
type Image struct {
	ContentURL      *string          `json:"contentUrl,omitempty"`
	ImageProperties *ImageProperties `json:"imageProperties,omitempty"`
	Placeholder     *Placeholder     `json:"placeholder,omitempty"`
	SourceURL       *string          `json:"sourceUrl,omitempty"`
}
