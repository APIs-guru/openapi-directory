package shared



type InstancesListResponse struct {
    Items []DatabaseInstance `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Warnings []APIWarning `json:"warnings,omitempty"`
    
}

