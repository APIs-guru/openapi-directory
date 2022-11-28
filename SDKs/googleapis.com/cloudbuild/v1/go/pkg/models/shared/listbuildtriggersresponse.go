package shared

// ListBuildTriggersResponse
// Response containing existing `BuildTriggers`.
type ListBuildTriggersResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	Triggers      []BuildTrigger `json:"triggers,omitempty"`
}
