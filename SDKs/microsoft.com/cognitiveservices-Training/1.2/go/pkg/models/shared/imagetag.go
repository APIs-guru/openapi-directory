package shared

import (
	"time"
)

type ImageTag struct {
	Created *time.Time `json:"Created"`
	TagID   *string    `json:"TagId"`
}
