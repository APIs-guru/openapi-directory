package shared

type GoogleCloudRecommendationengineV1beta1PurchaseTransaction struct {
	Costs        map[string]float32 `json:"costs"`
	CurrencyCode *string            `json:"currencyCode"`
	ID           *string            `json:"id"`
	Revenue      *float32           `json:"revenue"`
	Taxes        map[string]float32 `json:"taxes"`
}
