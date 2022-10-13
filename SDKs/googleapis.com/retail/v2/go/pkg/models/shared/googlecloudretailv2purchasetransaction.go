package shared

type GoogleCloudRetailV2PurchaseTransaction struct {
	Cost         *float32 `json:"cost"`
	CurrencyCode *string  `json:"currencyCode"`
	ID           *string  `json:"id"`
	Revenue      *float32 `json:"revenue"`
	Tax          *float32 `json:"tax"`
}
