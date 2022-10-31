package shared

type OrdersCancelRequest struct {
	OperationID *string `json:"operationId,omitempty"`
	Reason      *string `json:"reason,omitempty"`
	ReasonText  *string `json:"reasonText,omitempty"`
}
