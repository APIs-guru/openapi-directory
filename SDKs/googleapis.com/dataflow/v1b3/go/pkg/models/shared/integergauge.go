package shared



type IntegerGauge struct {
    Timestamp *string `json:"timestamp,omitempty"`
    Value *SplitInt64 `json:"value,omitempty"`
    
}

