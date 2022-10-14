package shared

type ListCoursesResponse struct {
	Courses       []Course `json:"courses,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
