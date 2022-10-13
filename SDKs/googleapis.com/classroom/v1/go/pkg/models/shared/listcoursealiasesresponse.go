package shared

type ListCourseAliasesResponse struct {
	Aliases       []CourseAlias `json:"aliases"`
	NextPageToken *string       `json:"nextPageToken"`
}
