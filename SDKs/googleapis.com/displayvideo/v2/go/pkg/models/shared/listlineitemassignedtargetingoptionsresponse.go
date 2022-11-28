package shared

// ListLineItemAssignedTargetingOptionsResponse
// Response message for ListLineItemAssignedTargetingOptions.
type ListLineItemAssignedTargetingOptionsResponse struct {
	AssignedTargetingOptions []AssignedTargetingOption `json:"assignedTargetingOptions,omitempty"`
	NextPageToken            *string                   `json:"nextPageToken,omitempty"`
}
