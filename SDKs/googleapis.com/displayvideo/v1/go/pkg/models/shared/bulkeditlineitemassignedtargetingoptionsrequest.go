package shared



type BulkEditLineItemAssignedTargetingOptionsRequest struct {
    CreateRequests []CreateAssignedTargetingOptionsRequest `json:"createRequests,omitempty"`
    DeleteRequests []DeleteAssignedTargetingOptionsRequest `json:"deleteRequests,omitempty"`
    
}

