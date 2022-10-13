package shared

type ListExclusionsResponse struct {
	Exclusions    []LogExclusion `json:"exclusions"`
	NextPageToken *string        `json:"nextPageToken"`
}
