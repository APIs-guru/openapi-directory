package shared

import (
"time")

type CommentFeed struct {
    Etag *string `json:"etag,omitempty"`
    ID *string `json:"id,omitempty"`
    Items []Comment `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextLink *string `json:"nextLink,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Title *string `json:"title,omitempty"`
    Updated *time.Time `json:"updated,omitempty"`
    
}

