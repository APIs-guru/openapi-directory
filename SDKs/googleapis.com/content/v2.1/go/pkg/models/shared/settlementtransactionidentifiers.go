package shared

type SettlementTransactionIdentifiers struct {
	AdjustmentID      *string  `json:"adjustmentId,omitempty"`
	MerchantOrderID   *string  `json:"merchantOrderId,omitempty"`
	OrderItemID       *string  `json:"orderItemId,omitempty"`
	SettlementEntryID *string  `json:"settlementEntryId,omitempty"`
	ShipmentIds       []string `json:"shipmentIds,omitempty"`
	TransactionID     *string  `json:"transactionId,omitempty"`
}
