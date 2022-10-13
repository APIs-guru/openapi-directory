package shared

type GoogleCloudRetailV2alphaPurchaseTransaction struct {
	Cost         *float32 `json:"cost"`
	CurrencyCode *string  `json:"currencyCode"`
	ID           *string  `json:"id"`
	Revenue      *float32 `json:"revenue"`
	Tax          *float32 `json:"tax"`
}
