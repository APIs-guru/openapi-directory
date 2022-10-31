package shared



type ConfigManagementSyncError struct {
    Code *string `json:"code,omitempty"`
    ErrorMessage *string `json:"errorMessage,omitempty"`
    ErrorResources []ConfigManagementErrorResource `json:"errorResources,omitempty"`
    
}

