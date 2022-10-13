package shared

type OrderreturnsProcessRequest struct {
	FullChargeReturnShippingCost *bool                        `json:"fullChargeReturnShippingCost"`
	OperationID                  *string                      `json:"operationId"`
	RefundShippingFee            *OrderreturnsRefundOperation `json:"refundShippingFee"`
	ReturnItems                  []OrderreturnsReturnItem     `json:"returnItems"`
}
