package shared

type ListCoursesResponse struct {
	Courses       []Course `json:"courses"`
	NextPageToken *string  `json:"nextPageToken"`
}
