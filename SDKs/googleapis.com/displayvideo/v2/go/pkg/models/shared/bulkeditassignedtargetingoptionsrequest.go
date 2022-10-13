package shared

type BulkEditAssignedTargetingOptionsRequest struct {
	CreateRequests []CreateAssignedTargetingOptionsRequest `json:"createRequests"`
	DeleteRequests []DeleteAssignedTargetingOptionsRequest `json:"deleteRequests"`
	LineItemIds    []string                                `json:"lineItemIds"`
}
