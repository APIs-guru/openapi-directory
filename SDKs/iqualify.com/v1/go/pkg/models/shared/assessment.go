package shared

import (
	"time"
)

type Assessment struct {
	Content    *string    `json:"content,omitempty"`
	DueDate    *time.Time `json:"dueDate,omitempty"`
	MarkNumber *string    `json:"markNumber,omitempty"`
	MarkType   *string    `json:"markType,omitempty"`
	OpenDate   *time.Time `json:"openDate,omitempty"`
}
