package shared



type CreateOperationRequest struct {
    Operation *Operation `json:"operation,omitempty"`
    OperationID *string `json:"operationId,omitempty"`
    
}

