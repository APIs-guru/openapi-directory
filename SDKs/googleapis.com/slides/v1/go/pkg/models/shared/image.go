package shared

type Image struct {
	ContentURL      *string          `json:"contentUrl,omitempty"`
	ImageProperties *ImageProperties `json:"imageProperties,omitempty"`
	Placeholder     *Placeholder     `json:"placeholder,omitempty"`
	SourceURL       *string          `json:"sourceUrl,omitempty"`
}
