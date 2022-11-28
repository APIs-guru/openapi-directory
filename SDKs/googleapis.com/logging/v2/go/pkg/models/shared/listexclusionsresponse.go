package shared

// ListExclusionsResponse
// Result returned from ListExclusions.
type ListExclusionsResponse struct {
	Exclusions    []LogExclusion `json:"exclusions,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}
