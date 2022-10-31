package shared

type ListExclusionsResponse struct {
	Exclusions    []LogExclusion `json:"exclusions,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}
