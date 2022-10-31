package shared



type FloatingPointMean struct {
    Count *SplitInt64 `json:"count,omitempty"`
    Sum *float64 `json:"sum,omitempty"`
    
}

