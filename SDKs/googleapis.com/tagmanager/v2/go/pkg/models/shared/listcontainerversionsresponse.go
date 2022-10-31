package shared



type ListContainerVersionsResponse struct {
    ContainerVersionHeader []ContainerVersionHeader `json:"containerVersionHeader,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

