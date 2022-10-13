package shared

import (
	"time"
)

type HTTPPost struct {
	Attachments       []DocumentResponse `json:"attachments"`
	Content           *string            `json:"content"`
	CreatedAt         *time.Time         `json:"createdAt"`
	Email             *string            `json:"email"`
	ID                *string            `json:"id"`
	IsFacilitatorPost *bool              `json:"isFacilitatorPost"`
	Moderation        *Moderation        `json:"moderation"`
	Title             *string            `json:"title"`
}
