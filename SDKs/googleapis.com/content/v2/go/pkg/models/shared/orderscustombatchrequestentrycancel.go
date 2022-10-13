package shared

type OrdersCustomBatchRequestEntryCancel struct {
	Reason     *string `json:"reason"`
	ReasonText *string `json:"reasonText"`
}
