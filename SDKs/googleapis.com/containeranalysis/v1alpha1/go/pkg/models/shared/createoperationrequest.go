package shared

type CreateOperationRequest struct {
	Operation   *Operation `json:"operation"`
	OperationID *string    `json:"operationId"`
}
