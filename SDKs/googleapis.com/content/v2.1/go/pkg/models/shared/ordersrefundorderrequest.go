package shared

type OrdersRefundOrderRequest struct {
	Amount      *MonetaryAmount `json:"amount"`
	FullRefund  *bool           `json:"fullRefund"`
	OperationID *string         `json:"operationId"`
	Reason      *string         `json:"reason"`
	ReasonText  *string         `json:"reasonText"`
}
