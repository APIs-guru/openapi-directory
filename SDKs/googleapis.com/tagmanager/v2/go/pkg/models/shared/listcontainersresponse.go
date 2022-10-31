package shared

type ListContainersResponse struct {
	Container     []Container `json:"container,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
