package shared

type SettlementTransactionIdentifiers struct {
	AdjustmentID      *string  `json:"adjustmentId"`
	MerchantOrderID   *string  `json:"merchantOrderId"`
	OrderItemID       *string  `json:"orderItemId"`
	SettlementEntryID *string  `json:"settlementEntryId"`
	ShipmentIds       []string `json:"shipmentIds"`
	TransactionID     *string  `json:"transactionId"`
}
