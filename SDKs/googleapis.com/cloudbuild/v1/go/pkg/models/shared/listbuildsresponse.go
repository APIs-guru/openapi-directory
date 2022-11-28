package shared

// ListBuildsResponse
// Response including listed builds.
type ListBuildsResponse struct {
	Builds        []Build `json:"builds,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
