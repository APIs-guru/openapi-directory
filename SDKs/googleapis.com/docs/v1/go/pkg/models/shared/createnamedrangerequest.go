package shared



type CreateNamedRangeRequest struct {
    Name *string `json:"name,omitempty"`
    Range *Range `json:"range,omitempty"`
    
}

