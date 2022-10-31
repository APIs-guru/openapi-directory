package shared



type ProductStatusDestinationStatus struct {
    ApprovalPending *bool `json:"approvalPending,omitempty"`
    ApprovalStatus *string `json:"approvalStatus,omitempty"`
    Destination *string `json:"destination,omitempty"`
    Intention *string `json:"intention,omitempty"`
    
}

