package shared

type OrdersCustomBatchRequestEntryRefundItemShipping struct {
	Amount     *Price `json:"amount"`
	FullRefund *bool  `json:"fullRefund"`
}
