package shared



type CancelOperationRequest struct {
    Name *string `json:"name,omitempty"`
    OperationID *string `json:"operationId,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    Zone *string `json:"zone,omitempty"`
    
}

