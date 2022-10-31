package shared

import (
	"time"
)

type HTTPPost struct {
	Attachments       []DocumentResponse `json:"attachments,omitempty"`
	Content           *string            `json:"content,omitempty"`
	CreatedAt         *time.Time         `json:"createdAt,omitempty"`
	Email             *string            `json:"email,omitempty"`
	ID                *string            `json:"id,omitempty"`
	IsFacilitatorPost *bool              `json:"isFacilitatorPost,omitempty"`
	Moderation        *Moderation        `json:"moderation,omitempty"`
	Title             *string            `json:"title,omitempty"`
}
