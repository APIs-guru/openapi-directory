package shared

import (
	"time"
)

type ImageTag struct {
	Created *time.Time `json:"created"`
	TagID   *string    `json:"tagId"`
	TagName *string    `json:"tagName"`
}
