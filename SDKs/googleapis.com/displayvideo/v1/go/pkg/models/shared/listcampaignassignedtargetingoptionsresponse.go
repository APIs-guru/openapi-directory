package shared

type ListCampaignAssignedTargetingOptionsResponse struct {
	AssignedTargetingOptions []AssignedTargetingOption `json:"assignedTargetingOptions"`
	NextPageToken            *string                   `json:"nextPageToken"`
}
