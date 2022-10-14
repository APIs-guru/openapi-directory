package shared

type ReportError struct {
	OperationID *string `json:"operationId,omitempty"`
	Status      *Status `json:"status,omitempty"`
}
