package shared



type TransferRequest struct {
    FromOfferingID *string `json:"fromOfferingId,omitempty"`
    SendInvite *bool `json:"sendInvite,omitempty"`
    ToOfferingID *string `json:"toOfferingId,omitempty"`
    
}

