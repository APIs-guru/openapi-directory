package shared

import (
"time")

type Comment struct {
    Content *string `json:"content,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    Email *string `json:"email,omitempty"`
    ID *string `json:"id,omitempty"`
    IsFacilitatorPost *bool `json:"isFacilitatorPost,omitempty"`
    Moderation *Moderation `json:"moderation,omitempty"`
    ParentCommentID *string `json:"parentCommentId,omitempty"`
    PostID *string `json:"postId,omitempty"`
    
}

