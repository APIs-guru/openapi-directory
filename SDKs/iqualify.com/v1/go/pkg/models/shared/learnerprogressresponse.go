package shared

import (
	"time"
)

type LearnerProgressResponse struct {
	Completion     *string    `json:"completion"`
	CourseID       *string    `json:"courseId"`
	Email          *string    `json:"email"`
	FirstName      *string    `json:"firstName"`
	LastLoggedInAt *time.Time `json:"lastLoggedInAt"`
	LastName       *string    `json:"lastName"`
	PersonID       *string    `json:"personId"`
}
