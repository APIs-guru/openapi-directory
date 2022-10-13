package shared

import (
	"time"
)

type ImagePerformance struct {
	Created      *time.Time    `json:"created"`
	Height       *int32        `json:"height"`
	ID           *string       `json:"id"`
	ImageURI     *string       `json:"imageUri"`
	Predictions  []Prediction  `json:"predictions"`
	Regions      []ImageRegion `json:"regions"`
	Tags         []ImageTag    `json:"tags"`
	ThumbnailURI *string       `json:"thumbnailUri"`
	Width        *int32        `json:"width"`
}
