package shared



type OrdersAcknowledgeResponse struct {
    ExecutionStatus *string `json:"executionStatus,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

