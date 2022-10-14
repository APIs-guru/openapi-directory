package shared

import (
	"time"
)

type ActivityFeed struct {
	Etag          *string    `json:"etag,omitempty"`
	ID            *string    `json:"id,omitempty"`
	Items         []Activity `json:"items,omitempty"`
	Kind          *string    `json:"kind,omitempty"`
	NextLink      *string    `json:"nextLink,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	SelfLink      *string    `json:"selfLink,omitempty"`
	Title         *string    `json:"title,omitempty"`
	Updated       *time.Time `json:"updated,omitempty"`
}
