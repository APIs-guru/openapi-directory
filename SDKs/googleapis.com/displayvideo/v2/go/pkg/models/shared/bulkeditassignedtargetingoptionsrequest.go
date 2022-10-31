package shared



type BulkEditAssignedTargetingOptionsRequest struct {
    CreateRequests []CreateAssignedTargetingOptionsRequest `json:"createRequests,omitempty"`
    DeleteRequests []DeleteAssignedTargetingOptionsRequest `json:"deleteRequests,omitempty"`
    LineItemIds []string `json:"lineItemIds,omitempty"`
    
}

