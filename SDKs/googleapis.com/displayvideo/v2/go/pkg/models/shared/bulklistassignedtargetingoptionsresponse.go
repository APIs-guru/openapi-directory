package shared



type BulkListAssignedTargetingOptionsResponse struct {
    LineItemAssignedTargetingOptions []LineItemAssignedTargetingOption `json:"lineItemAssignedTargetingOptions,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

