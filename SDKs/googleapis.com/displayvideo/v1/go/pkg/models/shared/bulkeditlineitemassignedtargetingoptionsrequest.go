package shared

type BulkEditLineItemAssignedTargetingOptionsRequest struct {
	CreateRequests []CreateAssignedTargetingOptionsRequest `json:"createRequests"`
	DeleteRequests []DeleteAssignedTargetingOptionsRequest `json:"deleteRequests"`
}
