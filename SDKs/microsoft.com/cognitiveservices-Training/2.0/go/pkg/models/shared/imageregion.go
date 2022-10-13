package shared

import (
	"time"
)

type ImageRegion struct {
	Created  *time.Time `json:"created"`
	Height   *float32   `json:"height"`
	Left     *float32   `json:"left"`
	RegionID *string    `json:"regionId"`
	TagID    *string    `json:"tagId"`
	TagName  *string    `json:"tagName"`
	Top      *float32   `json:"top"`
	Width    *float32   `json:"width"`
}
