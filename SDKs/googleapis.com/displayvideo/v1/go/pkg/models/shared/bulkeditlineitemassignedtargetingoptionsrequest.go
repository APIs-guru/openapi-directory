package shared

// BulkEditLineItemAssignedTargetingOptionsRequestInput
// Request message for BulkEditLineItemAssignedTargetingOptions.
type BulkEditLineItemAssignedTargetingOptionsRequestInput struct {
	CreateRequests []CreateAssignedTargetingOptionsRequestInput `json:"createRequests,omitempty"`
	DeleteRequests []DeleteAssignedTargetingOptionsRequest      `json:"deleteRequests,omitempty"`
}
