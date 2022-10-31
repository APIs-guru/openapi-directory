package shared



type NetworkInterface struct {
    ExternalIP *string `json:"externalIp,omitempty"`
    InternalIP *string `json:"internalIp,omitempty"`
    Network *string `json:"network,omitempty"`
    Subnetwork *string `json:"subnetwork,omitempty"`
    
}

