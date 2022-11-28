package shared

// Image
// An image, with a link to the main image and a thumbnail.
type Image struct {
	Error       *Status              `json:"error,omitempty"`
	SourceImage *ToolOutputReference `json:"sourceImage,omitempty"`
	StepID      *string              `json:"stepId,omitempty"`
	Thumbnail   *Thumbnail           `json:"thumbnail,omitempty"`
}
