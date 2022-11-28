package shared

// ListCourseAliasesResponse
// Response when listing course aliases.
type ListCourseAliasesResponse struct {
	Aliases       []CourseAlias `json:"aliases,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
