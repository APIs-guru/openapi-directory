package shared

type BulkEditPartnerAssignedTargetingOptionsRequest struct {
	CreateRequests []CreateAssignedTargetingOptionsRequest `json:"createRequests"`
	DeleteRequests []DeleteAssignedTargetingOptionsRequest `json:"deleteRequests"`
}
