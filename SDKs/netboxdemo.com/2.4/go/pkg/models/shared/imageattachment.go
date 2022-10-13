package shared

import (
	"time"
)

type ImageAttachment struct {
	ContentType string     `json:"content_type"`
	Created     *time.Time `json:"created"`
	ID          *int64     `json:"id"`
	Image       *string    `json:"image"`
	ImageHeight int64      `json:"image_height"`
	ImageWidth  int64      `json:"image_width"`
	Name        *string    `json:"name"`
	ObjectID    int64      `json:"object_id"`
	Parent      *string    `json:"parent"`
}
