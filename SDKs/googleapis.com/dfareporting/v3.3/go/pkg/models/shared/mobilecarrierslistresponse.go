package shared



type MobileCarriersListResponse struct {
    Kind *string `json:"kind,omitempty"`
    MobileCarriers []MobileCarrier `json:"mobileCarriers,omitempty"`
    
}

