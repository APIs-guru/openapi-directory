package shared

// BulkListInsertionOrderAssignedTargetingOptionsResponse
// Response message for BulkListInsertionOrderAssignedTargetingOptions.
type BulkListInsertionOrderAssignedTargetingOptionsResponse struct {
	AssignedTargetingOptions []AssignedTargetingOption `json:"assignedTargetingOptions,omitempty"`
	NextPageToken            *string                   `json:"nextPageToken,omitempty"`
}
