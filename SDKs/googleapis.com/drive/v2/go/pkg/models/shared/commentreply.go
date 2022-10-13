package shared

import (
	"time"
)

type CommentReply struct {
	Author       *User      `json:"author"`
	Content      *string    `json:"content"`
	CreatedDate  *time.Time `json:"createdDate"`
	Deleted      *bool      `json:"deleted"`
	HTMLContent  *string    `json:"htmlContent"`
	Kind         *string    `json:"kind"`
	ModifiedDate *time.Time `json:"modifiedDate"`
	ReplyID      *string    `json:"replyId"`
	Verb         *string    `json:"verb"`
}
