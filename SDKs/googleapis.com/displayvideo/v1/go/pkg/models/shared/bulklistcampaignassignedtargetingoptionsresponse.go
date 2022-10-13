package shared

type BulkListCampaignAssignedTargetingOptionsResponse struct {
	AssignedTargetingOptions []AssignedTargetingOption `json:"assignedTargetingOptions"`
	NextPageToken            *string                   `json:"nextPageToken"`
}
