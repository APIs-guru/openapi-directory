package shared

type OrderreturnsCreateOrderReturnRequest struct {
	LineItems        []OrderreturnsLineItem `json:"lineItems"`
	OperationID      *string                `json:"operationId"`
	OrderID          *string                `json:"orderId"`
	ReturnMethodType *string                `json:"returnMethodType"`
}
