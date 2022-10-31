package shared



type PhotoResponse struct {
    Photo *Photo `json:"photo,omitempty"`
    Status *Status `json:"status,omitempty"`
    
}

