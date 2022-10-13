package shared

type Student struct {
	CourseID          *string      `json:"courseId"`
	Profile           *UserProfile `json:"profile"`
	StudentWorkFolder *DriveFolder `json:"studentWorkFolder"`
	UserID            *string      `json:"userId"`
}
