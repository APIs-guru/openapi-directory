package shared



type QueryRangeRequest struct {
    End *string `json:"end,omitempty"`
    Query *string `json:"query,omitempty"`
    Start *string `json:"start,omitempty"`
    Step *string `json:"step,omitempty"`
    Timeout *string `json:"timeout,omitempty"`
    
}

