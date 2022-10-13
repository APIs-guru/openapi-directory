package shared

import (
	"time"
)

type Comment struct {
	Content           *string     `json:"content"`
	CreatedAt         *time.Time  `json:"createdAt"`
	Email             *string     `json:"email"`
	ID                *string     `json:"id"`
	IsFacilitatorPost *bool       `json:"isFacilitatorPost"`
	Moderation        *Moderation `json:"moderation"`
	ParentCommentID   *string     `json:"parentCommentId"`
	PostID            *string     `json:"postId"`
}
