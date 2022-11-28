package shared

// Teacher
// Teacher of a course.
type Teacher struct {
	CourseID *string      `json:"courseId,omitempty"`
	Profile  *UserProfile `json:"profile,omitempty"`
	UserID   *string      `json:"userId,omitempty"`
}
