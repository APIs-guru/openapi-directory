package shared

// ListImageVersionsResponse
// The ImageVersions in a project and location.
type ListImageVersionsResponse struct {
	ImageVersions []ImageVersion `json:"imageVersions,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}
