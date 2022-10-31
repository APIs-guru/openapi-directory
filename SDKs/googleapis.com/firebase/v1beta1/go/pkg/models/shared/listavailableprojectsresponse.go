package shared



type ListAvailableProjectsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ProjectInfo []ProjectInfo `json:"projectInfo,omitempty"`
    
}

