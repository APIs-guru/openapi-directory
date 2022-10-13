package shared

type ListLineItemAssignedTargetingOptionsResponse struct {
	AssignedTargetingOptions []AssignedTargetingOption `json:"assignedTargetingOptions"`
	NextPageToken            *string                   `json:"nextPageToken"`
}
