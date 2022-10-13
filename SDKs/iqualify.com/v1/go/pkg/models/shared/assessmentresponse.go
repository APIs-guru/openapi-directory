package shared

import (
	"time"
)

type AssessmentResponse struct {
	Content         *string         `json:"content"`
	Documents       []Document      `json:"documents"`
	DueDate         *time.Time      `json:"dueDate"`
	DurationMinutes *int32          `json:"durationMinutes"`
	Filename        *string         `json:"filename"`
	Hidden          *bool           `json:"hidden"`
	ID              *string         `json:"id"`
	MarkNumber      *string         `json:"markNumber"`
	MarkType        *string         `json:"markType"`
	MaxAttempts     *int32          `json:"maxAttempts"`
	OpenDate        *time.Time      `json:"openDate"`
	Pid             *string         `json:"pid"`
	Points          *string         `json:"points"`
	Themes          []ThemeResponse `json:"themes"`
	Title           *string         `json:"title"`
	TotalQuestions  *int32          `json:"totalQuestions"`
	TotalThemes     *int32          `json:"totalThemes"`
	Type            *string         `json:"type"`
}
