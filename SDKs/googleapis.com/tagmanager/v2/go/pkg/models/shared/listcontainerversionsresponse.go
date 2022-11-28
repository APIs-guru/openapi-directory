package shared

// ListContainerVersionsResponse
// List container versions response.
type ListContainerVersionsResponse struct {
	ContainerVersionHeader []ContainerVersionHeader `json:"containerVersionHeader,omitempty"`
	NextPageToken          *string                  `json:"nextPageToken,omitempty"`
}
