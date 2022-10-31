package shared



type ApproximateSplitRequest struct {
    FractionConsumed *float64 `json:"fractionConsumed,omitempty"`
    FractionOfRemainder *float64 `json:"fractionOfRemainder,omitempty"`
    Position *Position `json:"position,omitempty"`
    
}

