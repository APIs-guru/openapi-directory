package shared



type ListBuildTriggersResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Triggers []BuildTrigger `json:"triggers,omitempty"`
    
}

