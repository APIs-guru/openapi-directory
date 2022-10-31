package shared

type OrderreturnsProcessRequest struct {
	FullChargeReturnShippingCost *bool                        `json:"fullChargeReturnShippingCost,omitempty"`
	OperationID                  *string                      `json:"operationId,omitempty"`
	RefundShippingFee            *OrderreturnsRefundOperation `json:"refundShippingFee,omitempty"`
	ReturnItems                  []OrderreturnsReturnItem     `json:"returnItems,omitempty"`
}
