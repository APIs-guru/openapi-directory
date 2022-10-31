package shared

type OrderReportTransaction struct {
	DisbursementAmount       *Price         `json:"disbursementAmount,omitempty"`
	DisbursementCreationDate *string        `json:"disbursementCreationDate,omitempty"`
	DisbursementDate         *string        `json:"disbursementDate,omitempty"`
	DisbursementID           *string        `json:"disbursementId,omitempty"`
	MerchantID               *string        `json:"merchantId,omitempty"`
	MerchantOrderID          *string        `json:"merchantOrderId,omitempty"`
	OrderID                  *string        `json:"orderId,omitempty"`
	ProductAmount            *ProductAmount `json:"productAmount,omitempty"`
	TransactionDate          *string        `json:"transactionDate,omitempty"`
}
