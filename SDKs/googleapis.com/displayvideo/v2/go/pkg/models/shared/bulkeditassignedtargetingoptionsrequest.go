package shared

// BulkEditAssignedTargetingOptionsRequestInput
// Request message for BulkEditLineItemsAssignedTargetingOptions.
type BulkEditAssignedTargetingOptionsRequestInput struct {
	CreateRequests []CreateAssignedTargetingOptionsRequestInput `json:"createRequests,omitempty"`
	DeleteRequests []DeleteAssignedTargetingOptionsRequest      `json:"deleteRequests,omitempty"`
	LineItemIds    []string                                     `json:"lineItemIds,omitempty"`
}
