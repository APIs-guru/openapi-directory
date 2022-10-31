package shared

import (
	"time"
)

type ImagePerformance struct {
	Created      *time.Time    `json:"created,omitempty"`
	Height       *int32        `json:"height,omitempty"`
	ID           *string       `json:"id,omitempty"`
	ImageURI     *string       `json:"imageUri,omitempty"`
	Predictions  []Prediction  `json:"predictions,omitempty"`
	Regions      []ImageRegion `json:"regions,omitempty"`
	Tags         []ImageTag    `json:"tags,omitempty"`
	ThumbnailURI *string       `json:"thumbnailUri,omitempty"`
	Width        *int32        `json:"width,omitempty"`
}
