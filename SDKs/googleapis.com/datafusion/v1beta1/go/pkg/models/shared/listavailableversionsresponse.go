package shared



type ListAvailableVersionsResponse struct {
    AvailableVersions []Version `json:"availableVersions,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

