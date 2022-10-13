package shared

type ListContainerVersionsResponse struct {
	ContainerVersion       []ContainerVersion       `json:"containerVersion"`
	ContainerVersionHeader []ContainerVersionHeader `json:"containerVersionHeader"`
}
