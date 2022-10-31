package shared



type ExecuteBatchDmlResponse struct {
    ResultSets []ResultSet `json:"resultSets,omitempty"`
    Status *Status `json:"status,omitempty"`
    
}

