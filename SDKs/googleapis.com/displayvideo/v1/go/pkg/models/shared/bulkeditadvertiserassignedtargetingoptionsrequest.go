package shared

type BulkEditAdvertiserAssignedTargetingOptionsRequest struct {
	CreateRequests []CreateAssignedTargetingOptionsRequest `json:"createRequests"`
	DeleteRequests []DeleteAssignedTargetingOptionsRequest `json:"deleteRequests"`
}
