package shared

type OrderreturnsReturnItem struct {
	Refund       *OrderreturnsRefundOperation `json:"refund"`
	Reject       *OrderreturnsRejectOperation `json:"reject"`
	ReturnItemID *string                      `json:"returnItemId"`
}
