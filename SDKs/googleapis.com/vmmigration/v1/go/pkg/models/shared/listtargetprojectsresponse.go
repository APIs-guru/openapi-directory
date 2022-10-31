package shared



type ListTargetProjectsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TargetProjects []TargetProject `json:"targetProjects,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

