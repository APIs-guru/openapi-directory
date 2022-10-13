package shared

import (
	"time"
)

type Assessment struct {
	Content    *string    `json:"content"`
	DueDate    *time.Time `json:"dueDate"`
	MarkNumber *string    `json:"markNumber"`
	MarkType   *string    `json:"markType"`
	OpenDate   *time.Time `json:"openDate"`
}
