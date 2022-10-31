package shared



type LoyaltyPoints struct {
    Name *string `json:"name,omitempty"`
    PointsValue *string `json:"pointsValue,omitempty"`
    Ratio *float64 `json:"ratio,omitempty"`
    
}

