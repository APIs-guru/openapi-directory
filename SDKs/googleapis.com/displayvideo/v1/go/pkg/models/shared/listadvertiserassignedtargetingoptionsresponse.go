package shared

// ListAdvertiserAssignedTargetingOptionsResponse
// Response message for ListAdvertiserAssignedTargetingOptions.
type ListAdvertiserAssignedTargetingOptionsResponse struct {
	AssignedTargetingOptions []AssignedTargetingOption `json:"assignedTargetingOptions,omitempty"`
	NextPageToken            *string                   `json:"nextPageToken,omitempty"`
}
