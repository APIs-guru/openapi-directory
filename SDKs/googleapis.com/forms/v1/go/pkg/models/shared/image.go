package shared

// Image
// Data representing an image.
type Image struct {
	AltText    *string          `json:"altText,omitempty"`
	ContentURI *string          `json:"contentUri,omitempty"`
	Properties *MediaProperties `json:"properties,omitempty"`
	SourceURI  *string          `json:"sourceUri,omitempty"`
}

// ImageInput
// Data representing an image.
type ImageInput struct {
	AltText    *string          `json:"altText,omitempty"`
	Properties *MediaProperties `json:"properties,omitempty"`
	SourceURI  *string          `json:"sourceUri,omitempty"`
}
