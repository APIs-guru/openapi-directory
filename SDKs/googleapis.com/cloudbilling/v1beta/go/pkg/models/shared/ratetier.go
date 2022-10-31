package shared



type RateTier struct {
    Price *Money `json:"price,omitempty"`
    StartAmount *float64 `json:"startAmount,omitempty"`
    
}

