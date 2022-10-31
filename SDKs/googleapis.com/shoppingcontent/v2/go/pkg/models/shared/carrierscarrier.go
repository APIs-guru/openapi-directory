package shared



type CarriersCarrier struct {
    Country *string `json:"country,omitempty"`
    EddServices []string `json:"eddServices,omitempty"`
    Name *string `json:"name,omitempty"`
    Services []string `json:"services,omitempty"`
    
}

