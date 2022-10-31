package shared



type ApproximateProgress struct {
    PercentComplete *float32 `json:"percentComplete,omitempty"`
    Position *Position `json:"position,omitempty"`
    RemainingTime *string `json:"remainingTime,omitempty"`
    
}

