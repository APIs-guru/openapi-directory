package shared

// ListCourseWorkResponse
// Response when listing course work.
type ListCourseWorkResponse struct {
	CourseWork    []CourseWork `json:"courseWork,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
