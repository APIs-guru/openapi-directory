package shared

type ReportError struct {
	OperationID *string `json:"operationId"`
	Status      *Status `json:"status"`
}
