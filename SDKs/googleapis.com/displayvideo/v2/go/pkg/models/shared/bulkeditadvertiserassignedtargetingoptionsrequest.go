package shared

type BulkEditAdvertiserAssignedTargetingOptionsRequest struct {
	CreateRequests []CreateAssignedTargetingOptionsRequest `json:"createRequests,omitempty"`
	DeleteRequests []DeleteAssignedTargetingOptionsRequest `json:"deleteRequests,omitempty"`
}
