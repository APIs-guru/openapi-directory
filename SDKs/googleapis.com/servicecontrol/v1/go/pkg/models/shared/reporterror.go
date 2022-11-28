package shared

// ReportError
// Represents the processing error of one Operation in the request.
type ReportError struct {
	OperationID *string `json:"operationId,omitempty"`
	Status      *Status `json:"status,omitempty"`
}
