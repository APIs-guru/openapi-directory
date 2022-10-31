package shared



type BulkListLineItemAssignedTargetingOptionsResponse struct {
    AssignedTargetingOptions []AssignedTargetingOption `json:"assignedTargetingOptions,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

