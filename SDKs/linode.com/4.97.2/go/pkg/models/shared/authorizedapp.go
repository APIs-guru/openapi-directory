package shared

import (
	"time"
)

type AuthorizedApp struct {
	Created      *time.Time `json:"created"`
	Expiry       *time.Time `json:"expiry"`
	ID           *int64     `json:"id"`
	Label        *string    `json:"label"`
	Scopes       *string    `json:"scopes"`
	ThumbnailURL *string    `json:"thumbnail_url"`
	Website      *string    `json:"website"`
}
