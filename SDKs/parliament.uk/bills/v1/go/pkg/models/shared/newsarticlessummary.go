package shared

import (
	"time"
)

type NewsArticlesSummary struct {
	Content     *string    `json:"content,omitempty"`
	DisplayDate *time.Time `json:"displayDate,omitempty"`
	ID          *int32     `json:"id,omitempty"`
	Title       *string    `json:"title,omitempty"`
}
