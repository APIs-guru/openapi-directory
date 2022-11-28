package shared

// ListCampaignAssignedTargetingOptionsResponse
// Response message for ListCampaignAssignedTargetingOptions.
type ListCampaignAssignedTargetingOptionsResponse struct {
	AssignedTargetingOptions []AssignedTargetingOption `json:"assignedTargetingOptions,omitempty"`
	NextPageToken            *string                   `json:"nextPageToken,omitempty"`
}
