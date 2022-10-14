package shared

type Image struct {
	Error       *Status              `json:"error,omitempty"`
	SourceImage *ToolOutputReference `json:"sourceImage,omitempty"`
	StepID      *string              `json:"stepId,omitempty"`
	Thumbnail   *Thumbnail           `json:"thumbnail,omitempty"`
}
