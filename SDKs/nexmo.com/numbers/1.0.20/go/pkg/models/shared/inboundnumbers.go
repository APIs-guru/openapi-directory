package shared



type InboundNumbers struct {
    Count *int64 `json:"count,omitempty"`
    Numbers []Ownednumber `json:"numbers,omitempty"`
    
}

