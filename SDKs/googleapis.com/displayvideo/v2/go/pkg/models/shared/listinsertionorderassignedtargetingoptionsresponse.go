package shared

// ListInsertionOrderAssignedTargetingOptionsResponse
// Response message for ListInsertionOrderAssignedTargetingOptions.
type ListInsertionOrderAssignedTargetingOptionsResponse struct {
	AssignedTargetingOptions []AssignedTargetingOption `json:"assignedTargetingOptions,omitempty"`
	NextPageToken            *string                   `json:"nextPageToken,omitempty"`
}
