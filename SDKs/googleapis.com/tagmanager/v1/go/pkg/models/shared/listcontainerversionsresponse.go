package shared

type ListContainerVersionsResponse struct {
	ContainerVersion       []ContainerVersion       `json:"containerVersion,omitempty"`
	ContainerVersionHeader []ContainerVersionHeader `json:"containerVersionHeader,omitempty"`
}
