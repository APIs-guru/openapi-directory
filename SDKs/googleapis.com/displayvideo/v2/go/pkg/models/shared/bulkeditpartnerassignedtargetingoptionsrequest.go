package shared

// BulkEditPartnerAssignedTargetingOptionsRequestInput
// Request message for BulkEditPartnerAssignedTargetingOptions.
type BulkEditPartnerAssignedTargetingOptionsRequestInput struct {
	CreateRequests []CreateAssignedTargetingOptionsRequestInput `json:"createRequests,omitempty"`
	DeleteRequests []DeleteAssignedTargetingOptionsRequest      `json:"deleteRequests,omitempty"`
}
