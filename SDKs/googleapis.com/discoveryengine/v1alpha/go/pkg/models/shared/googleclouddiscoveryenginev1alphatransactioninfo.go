package shared

// GoogleCloudDiscoveryengineV1alphaTransactionInfo
// A transaction represents the entire purchase transaction.
type GoogleCloudDiscoveryengineV1alphaTransactionInfo struct {
	Cost          *float32 `json:"cost,omitempty"`
	Currency      *string  `json:"currency,omitempty"`
	DiscountValue *float32 `json:"discountValue,omitempty"`
	Tax           *float32 `json:"tax,omitempty"`
	TransactionID *string  `json:"transactionId,omitempty"`
	Value         *float32 `json:"value,omitempty"`
}
