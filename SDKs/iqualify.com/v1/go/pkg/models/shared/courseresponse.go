package shared

import (
	"time"
)

type CourseResponse struct {
	CoverImageURL *string      `json:"coverImageUrl,omitempty"`
	CreatedAt     *time.Time   `json:"createdAt,omitempty"`
	ID            *string      `json:"id,omitempty"`
	Metadata      *interface{} `json:"metadata,omitempty"`
	Name          *string      `json:"name,omitempty"`
}
