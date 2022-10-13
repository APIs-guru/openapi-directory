package shared

import (
	"time"
)

type CourseMetaResponse struct {
	CoverImageURL *string      `json:"coverImageUrl"`
	CreatedAt     *time.Time   `json:"createdAt"`
	ID            *string      `json:"id"`
	Metadata      *interface{} `json:"metadata"`
	Name          *string      `json:"name"`
	TasksEnabled  *bool        `json:"tasksEnabled"`
}
