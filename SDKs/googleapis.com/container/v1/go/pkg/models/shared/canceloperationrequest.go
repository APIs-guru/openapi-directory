package shared

// CancelOperationRequest
// CancelOperationRequest cancels a single operation.
type CancelOperationRequest struct {
	Name        *string `json:"name,omitempty"`
	OperationID *string `json:"operationId,omitempty"`
	ProjectID   *string `json:"projectId,omitempty"`
	Zone        *string `json:"zone,omitempty"`
}
