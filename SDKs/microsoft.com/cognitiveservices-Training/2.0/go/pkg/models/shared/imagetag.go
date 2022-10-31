package shared

import (
	"time"
)

type ImageTag struct {
	Created *time.Time `json:"created,omitempty"`
	TagID   *string    `json:"tagId,omitempty"`
	TagName *string    `json:"tagName,omitempty"`
}
