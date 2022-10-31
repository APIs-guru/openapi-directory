package shared

type BulkEditPartnerAssignedTargetingOptionsRequest struct {
	CreateRequests []CreateAssignedTargetingOptionsRequest `json:"createRequests,omitempty"`
	DeleteRequests []DeleteAssignedTargetingOptionsRequest `json:"deleteRequests,omitempty"`
}
