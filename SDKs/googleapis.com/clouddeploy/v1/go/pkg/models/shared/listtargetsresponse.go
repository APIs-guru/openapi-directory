package shared

// ListTargetsResponse
// The response object from `ListTargets`.
type ListTargetsResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Targets       []Target `json:"targets,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
}
