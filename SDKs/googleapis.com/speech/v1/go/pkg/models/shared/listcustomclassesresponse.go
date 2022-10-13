package shared

type ListCustomClassesResponse struct {
	CustomClasses []CustomClass `json:"customClasses"`
	NextPageToken *string       `json:"nextPageToken"`
}
