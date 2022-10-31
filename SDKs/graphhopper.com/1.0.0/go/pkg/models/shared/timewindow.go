package shared



type TimeWindow struct {
    Earliest *int64 `json:"earliest,omitempty"`
    Latest *int64 `json:"latest,omitempty"`
    
}

