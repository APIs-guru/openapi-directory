package shared



type ListAdvertiserAssignedTargetingOptionsResponse struct {
    AssignedTargetingOptions []AssignedTargetingOption `json:"assignedTargetingOptions,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

