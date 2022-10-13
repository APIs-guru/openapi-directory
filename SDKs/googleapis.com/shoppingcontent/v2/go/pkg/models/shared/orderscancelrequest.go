package shared

type OrdersCancelRequest struct {
	OperationID *string `json:"operationId"`
	Reason      *string `json:"reason"`
	ReasonText  *string `json:"reasonText"`
}
