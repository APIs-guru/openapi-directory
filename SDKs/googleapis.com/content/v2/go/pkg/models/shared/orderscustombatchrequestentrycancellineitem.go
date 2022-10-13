package shared

type OrdersCustomBatchRequestEntryCancelLineItem struct {
	Amount       *Price  `json:"amount"`
	AmountPretax *Price  `json:"amountPretax"`
	AmountTax    *Price  `json:"amountTax"`
	LineItemID   *string `json:"lineItemId"`
	ProductID    *string `json:"productId"`
	Quantity     *int64  `json:"quantity"`
	Reason       *string `json:"reason"`
	ReasonText   *string `json:"reasonText"`
}
