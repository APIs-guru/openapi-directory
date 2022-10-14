package shared

import (
	"time"
)

type LearnerProgressResponse struct {
	Completion     *string    `json:"completion,omitempty"`
	CourseID       *string    `json:"courseId,omitempty"`
	Email          *string    `json:"email,omitempty"`
	FirstName      *string    `json:"firstName,omitempty"`
	LastLoggedInAt *time.Time `json:"lastLoggedInAt,omitempty"`
	LastName       *string    `json:"lastName,omitempty"`
	PersonID       *string    `json:"personId,omitempty"`
}
