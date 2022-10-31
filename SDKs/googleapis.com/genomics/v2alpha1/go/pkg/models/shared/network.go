package shared



type Network struct {
    Name *string `json:"name,omitempty"`
    Subnetwork *string `json:"subnetwork,omitempty"`
    UsePrivateAddress *bool `json:"usePrivateAddress,omitempty"`
    
}

