package shared

type ListContainerVersionsResponse struct {
	ContainerVersionHeader []ContainerVersionHeader `json:"containerVersionHeader"`
	NextPageToken          *string                  `json:"nextPageToken"`
}
