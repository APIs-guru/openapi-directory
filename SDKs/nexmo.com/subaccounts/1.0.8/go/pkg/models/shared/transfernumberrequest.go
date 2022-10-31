package shared



type TransferNumberRequest struct {
    Country *string `json:"country,omitempty"`
    From *string `json:"from,omitempty"`
    Number *float64 `json:"number,omitempty"`
    To *string `json:"to,omitempty"`
    
}

