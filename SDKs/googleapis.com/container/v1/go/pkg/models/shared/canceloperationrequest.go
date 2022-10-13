package shared

type CancelOperationRequest struct {
	Name        *string `json:"name"`
	OperationID *string `json:"operationId"`
	ProjectID   *string `json:"projectId"`
	Zone        *string `json:"zone"`
}
