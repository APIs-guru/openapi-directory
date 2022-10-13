package shared

import (
	"time"
)

type NewsArticlesSummary struct {
	Content     *string    `json:"content"`
	DisplayDate *time.Time `json:"displayDate"`
	ID          *int32     `json:"id"`
	Title       *string    `json:"title"`
}
