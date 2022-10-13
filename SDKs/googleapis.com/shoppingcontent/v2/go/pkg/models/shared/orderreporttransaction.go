package shared

type OrderReportTransaction struct {
	DisbursementAmount           *Price         `json:"disbursementAmount"`
	DisbursementCreationDate     *string        `json:"disbursementCreationDate"`
	DisbursementDate             *string        `json:"disbursementDate"`
	DisbursementID               *string        `json:"disbursementId"`
	MerchantID                   *string        `json:"merchantId"`
	MerchantOrderID              *string        `json:"merchantOrderId"`
	OrderID                      *string        `json:"orderId"`
	ProductAmount                *Amount        `json:"productAmount"`
	ProductAmountWithRemittedTax *ProductAmount `json:"productAmountWithRemittedTax"`
	TransactionDate              *string        `json:"transactionDate"`
}
