package shared



type PartnerStoreStatusStatus struct {
    Message *string `json:"message,omitempty"`
    Percentage *string `json:"percentage,omitempty"`
    
}

type PartnerStoreStatus struct {
    Status *PartnerStoreStatusStatus `json:"status,omitempty"`
    
}

