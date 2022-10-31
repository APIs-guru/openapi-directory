package shared



type Student struct {
    CourseID *string `json:"courseId,omitempty"`
    Profile *UserProfile `json:"profile,omitempty"`
    StudentWorkFolder *DriveFolder `json:"studentWorkFolder,omitempty"`
    UserID *string `json:"userId,omitempty"`
    
}

