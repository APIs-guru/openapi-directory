package shared



type GlueRecord struct {
    HostName *string `json:"hostName,omitempty"`
    Ipv4Addresses []string `json:"ipv4Addresses,omitempty"`
    Ipv6Addresses []string `json:"ipv6Addresses,omitempty"`
    
}

