package shared

type GoogleCloudRetailV2betaPurchaseTransaction struct {
	Cost         *float32 `json:"cost"`
	CurrencyCode *string  `json:"currencyCode"`
	ID           *string  `json:"id"`
	Revenue      *float32 `json:"revenue"`
	Tax          *float32 `json:"tax"`
}
