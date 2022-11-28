package shared

import (
	"time"
)

// CommentContext
// The context of the file which is being commented on.
type CommentContext struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Comment
// A comment on a file in Google Drive.
type Comment struct {
	Anchor       *string         `json:"anchor,omitempty"`
	Author       *User           `json:"author,omitempty"`
	CommentID    *string         `json:"commentId,omitempty"`
	Content      *string         `json:"content,omitempty"`
	Context      *CommentContext `json:"context,omitempty"`
	CreatedDate  *time.Time      `json:"createdDate,omitempty"`
	Deleted      *bool           `json:"deleted,omitempty"`
	FileID       *string         `json:"fileId,omitempty"`
	FileTitle    *string         `json:"fileTitle,omitempty"`
	HTMLContent  *string         `json:"htmlContent,omitempty"`
	Kind         *string         `json:"kind,omitempty"`
	ModifiedDate *time.Time      `json:"modifiedDate,omitempty"`
	Replies      []CommentReply  `json:"replies,omitempty"`
	SelfLink     *string         `json:"selfLink,omitempty"`
	Status       *string         `json:"status,omitempty"`
}
