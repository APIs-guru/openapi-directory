package shared



type ListCourseWorkResponse struct {
    CourseWork []CourseWork `json:"courseWork,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

