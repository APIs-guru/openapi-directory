package shared

type UpdateDatabaseDdlRequest struct {
	OperationID *string  `json:"operationId"`
	Statements  []string `json:"statements"`
}
