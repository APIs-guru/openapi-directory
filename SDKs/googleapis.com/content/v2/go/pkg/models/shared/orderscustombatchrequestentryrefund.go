package shared

type OrdersCustomBatchRequestEntryRefund struct {
	Amount       *Price  `json:"amount"`
	AmountPretax *Price  `json:"amountPretax"`
	AmountTax    *Price  `json:"amountTax"`
	Reason       *string `json:"reason"`
	ReasonText   *string `json:"reasonText"`
}
