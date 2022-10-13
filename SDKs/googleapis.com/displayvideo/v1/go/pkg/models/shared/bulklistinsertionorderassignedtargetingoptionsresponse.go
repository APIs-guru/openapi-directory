package shared

type BulkListInsertionOrderAssignedTargetingOptionsResponse struct {
	AssignedTargetingOptions []AssignedTargetingOption `json:"assignedTargetingOptions"`
	NextPageToken            *string                   `json:"nextPageToken"`
}
