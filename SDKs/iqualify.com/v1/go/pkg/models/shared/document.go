package shared

import (
	"time"
)

type Document struct {
	CreatedAt *time.Time `json:"createdAt"`
	Filename  *string    `json:"filename"`
	ID        *string    `json:"id"`
	Mimetype  *string    `json:"mimetype"`
	Size      *int64     `json:"size"`
	URL       *string    `json:"url"`
}
