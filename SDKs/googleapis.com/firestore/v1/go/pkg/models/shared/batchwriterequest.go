package shared



type BatchWriteRequest struct {
    Labels map[string]string `json:"labels,omitempty"`
    Writes []Write `json:"writes,omitempty"`
    
}

