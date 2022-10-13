package shared

import (
	"time"
)

type CommentFeed struct {
	Etag          *string    `json:"etag"`
	ID            *string    `json:"id"`
	Items         []Comment  `json:"items"`
	Kind          *string    `json:"kind"`
	NextLink      *string    `json:"nextLink"`
	NextPageToken *string    `json:"nextPageToken"`
	Title         *string    `json:"title"`
	Updated       *time.Time `json:"updated"`
}
