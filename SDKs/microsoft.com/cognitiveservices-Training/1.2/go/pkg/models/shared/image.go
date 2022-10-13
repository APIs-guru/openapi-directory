package shared

import (
	"time"
)

type Image struct {
	Created      *time.Time      `json:"Created"`
	Height       *int32          `json:"Height"`
	ID           *string         `json:"Id"`
	ImageURI     *string         `json:"ImageUri"`
	Predictions  []PredictionTag `json:"Predictions"`
	Tags         []ImageTag      `json:"Tags"`
	ThumbnailURI *string         `json:"ThumbnailUri"`
	Width        *int32          `json:"Width"`
}
