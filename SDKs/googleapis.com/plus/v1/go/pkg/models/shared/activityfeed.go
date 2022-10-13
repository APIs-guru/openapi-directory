package shared

import (
	"time"
)

type ActivityFeed struct {
	Etag          *string    `json:"etag"`
	ID            *string    `json:"id"`
	Items         []Activity `json:"items"`
	Kind          *string    `json:"kind"`
	NextLink      *string    `json:"nextLink"`
	NextPageToken *string    `json:"nextPageToken"`
	SelfLink      *string    `json:"selfLink"`
	Title         *string    `json:"title"`
	Updated       *time.Time `json:"updated"`
}
