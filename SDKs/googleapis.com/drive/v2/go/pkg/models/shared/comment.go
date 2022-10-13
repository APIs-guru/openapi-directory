package shared

import (
	"time"
)

type CommentContext struct {
	Type  *string `json:"type"`
	Value *string `json:"value"`
}

type Comment struct {
	Anchor       *string         `json:"anchor"`
	Author       *User           `json:"author"`
	CommentID    *string         `json:"commentId"`
	Content      *string         `json:"content"`
	Context      *CommentContext `json:"context"`
	CreatedDate  *time.Time      `json:"createdDate"`
	Deleted      *bool           `json:"deleted"`
	FileID       *string         `json:"fileId"`
	FileTitle    *string         `json:"fileTitle"`
	HTMLContent  *string         `json:"htmlContent"`
	Kind         *string         `json:"kind"`
	ModifiedDate *time.Time      `json:"modifiedDate"`
	Replies      []CommentReply  `json:"replies"`
	SelfLink     *string         `json:"selfLink"`
	Status       *string         `json:"status"`
}
