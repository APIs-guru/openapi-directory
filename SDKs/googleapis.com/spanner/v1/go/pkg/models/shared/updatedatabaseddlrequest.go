package shared

type UpdateDatabaseDdlRequest struct {
	OperationID *string  `json:"operationId,omitempty"`
	Statements  []string `json:"statements,omitempty"`
}
