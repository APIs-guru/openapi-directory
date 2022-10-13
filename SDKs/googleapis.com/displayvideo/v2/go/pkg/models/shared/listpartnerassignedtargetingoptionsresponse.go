package shared

type ListPartnerAssignedTargetingOptionsResponse struct {
	AssignedTargetingOptions []AssignedTargetingOption `json:"assignedTargetingOptions"`
	NextPageToken            *string                   `json:"nextPageToken"`
}
