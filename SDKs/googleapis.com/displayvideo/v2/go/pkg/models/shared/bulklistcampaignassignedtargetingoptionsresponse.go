package shared



type BulkListCampaignAssignedTargetingOptionsResponse struct {
    AssignedTargetingOptions []AssignedTargetingOption `json:"assignedTargetingOptions,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

