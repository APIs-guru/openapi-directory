package shared

type ListCourseWorkResponse struct {
	CourseWork    []CourseWork `json:"courseWork"`
	NextPageToken *string      `json:"nextPageToken"`
}
