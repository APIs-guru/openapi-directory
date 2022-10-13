package shared

type Teacher struct {
	CourseID *string      `json:"courseId"`
	Profile  *UserProfile `json:"profile"`
	UserID   *string      `json:"userId"`
}
