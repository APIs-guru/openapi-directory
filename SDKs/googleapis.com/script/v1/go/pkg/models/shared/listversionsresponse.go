package shared

// ListVersionsResponse
// Response with the list of the versions for the specified script project.
type ListVersionsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Versions      []Version `json:"versions,omitempty"`
}
