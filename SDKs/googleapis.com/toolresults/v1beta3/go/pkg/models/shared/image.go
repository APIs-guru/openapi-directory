package shared

type Image struct {
	Error       *Status              `json:"error"`
	SourceImage *ToolOutputReference `json:"sourceImage"`
	StepID      *string              `json:"stepId"`
	Thumbnail   *Thumbnail           `json:"thumbnail"`
}
