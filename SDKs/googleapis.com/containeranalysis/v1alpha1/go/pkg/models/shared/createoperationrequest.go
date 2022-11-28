package shared

// CreateOperationRequest
// Request for creating an operation
type CreateOperationRequest struct {
	Operation   *Operation `json:"operation,omitempty"`
	OperationID *string    `json:"operationId,omitempty"`
}
