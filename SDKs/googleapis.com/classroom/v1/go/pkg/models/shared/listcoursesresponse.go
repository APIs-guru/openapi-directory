package shared

// ListCoursesResponse
// Response when listing courses.
type ListCoursesResponse struct {
	Courses       []Course `json:"courses,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
