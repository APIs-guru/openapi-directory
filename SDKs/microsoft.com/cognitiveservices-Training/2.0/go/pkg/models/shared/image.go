package shared

import (
	"time"
)

type Image struct {
	Created      *time.Time    `json:"created"`
	Height       *int32        `json:"height"`
	ID           *string       `json:"id"`
	ImageURI     *string       `json:"imageUri"`
	Regions      []ImageRegion `json:"regions"`
	Tags         []ImageTag    `json:"tags"`
	ThumbnailURI *string       `json:"thumbnailUri"`
	Width        *int32        `json:"width"`
}
