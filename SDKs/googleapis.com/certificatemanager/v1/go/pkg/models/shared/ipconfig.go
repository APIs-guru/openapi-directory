package shared



type IPConfig struct {
    IPAddress *string `json:"ipAddress,omitempty"`
    Ports []int64 `json:"ports,omitempty"`
    
}

