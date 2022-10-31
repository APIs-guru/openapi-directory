package shared



type ClientInfo struct {
    ClientInfoDetails []ClientInfoDetail `json:"clientInfoDetails,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

