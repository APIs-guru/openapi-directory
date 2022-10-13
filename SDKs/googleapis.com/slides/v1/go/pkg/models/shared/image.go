package shared

type Image struct {
	ContentURL      *string          `json:"contentUrl"`
	ImageProperties *ImageProperties `json:"imageProperties"`
	Placeholder     *Placeholder     `json:"placeholder"`
	SourceURL       *string          `json:"sourceUrl"`
}
