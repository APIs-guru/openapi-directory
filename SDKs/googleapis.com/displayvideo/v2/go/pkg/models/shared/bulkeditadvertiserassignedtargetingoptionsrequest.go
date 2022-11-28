package shared

// BulkEditAdvertiserAssignedTargetingOptionsRequestInput
// Request message for BulkEditAdvertiserAssignedTargetingOptions.
type BulkEditAdvertiserAssignedTargetingOptionsRequestInput struct {
	CreateRequests []CreateAssignedTargetingOptionsRequestInput `json:"createRequests,omitempty"`
	DeleteRequests []DeleteAssignedTargetingOptionsRequest      `json:"deleteRequests,omitempty"`
}
