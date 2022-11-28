package shared

// BulkListCampaignAssignedTargetingOptionsResponse
// Response message for BulkListCampaignAssignedTargetingOptions.
type BulkListCampaignAssignedTargetingOptionsResponse struct {
	AssignedTargetingOptions []AssignedTargetingOption `json:"assignedTargetingOptions,omitempty"`
	NextPageToken            *string                   `json:"nextPageToken,omitempty"`
}
