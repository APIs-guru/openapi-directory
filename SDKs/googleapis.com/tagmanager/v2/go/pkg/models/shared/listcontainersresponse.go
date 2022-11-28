package shared

// ListContainersResponse
// List Containers Response.
type ListContainersResponse struct {
	Container     []Container `json:"container,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
