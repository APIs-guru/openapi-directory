package shared

// ListEnvironmentsResponse
// The environments in a project and location.
type ListEnvironmentsResponse struct {
	Environments  []Environment `json:"environments,omitempty"`
	NextPageToken *string       `json:"nextPageToken,omitempty"`
}
