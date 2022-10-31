package shared

import (
	"time"
)

type ImageRegion struct {
	Created  *time.Time `json:"created,omitempty"`
	Height   *float32   `json:"height,omitempty"`
	Left     *float32   `json:"left,omitempty"`
	RegionID *string    `json:"regionId,omitempty"`
	TagID    *string    `json:"tagId,omitempty"`
	TagName  *string    `json:"tagName,omitempty"`
	Top      *float32   `json:"top,omitempty"`
	Width    *float32   `json:"width,omitempty"`
}
