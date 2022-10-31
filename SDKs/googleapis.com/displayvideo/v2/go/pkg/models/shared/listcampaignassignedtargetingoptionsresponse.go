package shared



type ListCampaignAssignedTargetingOptionsResponse struct {
    AssignedTargetingOptions []AssignedTargetingOption `json:"assignedTargetingOptions,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

