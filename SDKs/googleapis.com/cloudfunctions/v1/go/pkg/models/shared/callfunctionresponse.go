package shared



type CallFunctionResponse struct {
    Error *string `json:"error,omitempty"`
    ExecutionID *string `json:"executionId,omitempty"`
    Result *string `json:"result,omitempty"`
    
}

