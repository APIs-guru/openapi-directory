package shared

import (
"time")

type CommentReply struct {
    Author *User `json:"author,omitempty"`
    Content *string `json:"content,omitempty"`
    CreatedDate *time.Time `json:"createdDate,omitempty"`
    Deleted *bool `json:"deleted,omitempty"`
    HTMLContent *string `json:"htmlContent,omitempty"`
    Kind *string `json:"kind,omitempty"`
    ModifiedDate *time.Time `json:"modifiedDate,omitempty"`
    ReplyID *string `json:"replyId,omitempty"`
    Verb *string `json:"verb,omitempty"`
    
}

