package shared

// GoogleCloudRetailV2betaPurchaseTransaction
// A transaction represents the entire purchase transaction.
type GoogleCloudRetailV2betaPurchaseTransaction struct {
	Cost         *float32 `json:"cost,omitempty"`
	CurrencyCode *string  `json:"currencyCode,omitempty"`
	ID           *string  `json:"id,omitempty"`
	Revenue      *float32 `json:"revenue,omitempty"`
	Tax          *float32 `json:"tax,omitempty"`
}
