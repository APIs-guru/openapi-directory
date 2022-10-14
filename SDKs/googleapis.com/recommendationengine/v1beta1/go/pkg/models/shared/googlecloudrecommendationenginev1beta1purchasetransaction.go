package shared

type GoogleCloudRecommendationengineV1beta1PurchaseTransaction struct {
	Costs        map[string]float32 `json:"costs,omitempty"`
	CurrencyCode *string            `json:"currencyCode,omitempty"`
	ID           *string            `json:"id,omitempty"`
	Revenue      *float32           `json:"revenue,omitempty"`
	Taxes        map[string]float32 `json:"taxes,omitempty"`
}
