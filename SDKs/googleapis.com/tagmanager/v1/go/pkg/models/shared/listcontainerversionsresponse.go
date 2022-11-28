package shared

// ListContainerVersionsResponse
// List container versions response.
type ListContainerVersionsResponse struct {
	ContainerVersion       []ContainerVersion       `json:"containerVersion,omitempty"`
	ContainerVersionHeader []ContainerVersionHeader `json:"containerVersionHeader,omitempty"`
}
