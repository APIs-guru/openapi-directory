package shared

type AccountTaxTaxRule struct {
	Country       *string `json:"country,omitempty"`
	LocationID    *string `json:"locationId,omitempty"`
	RatePercent   *string `json:"ratePercent,omitempty"`
	ShippingTaxed *bool   `json:"shippingTaxed,omitempty"`
	UseGlobalRate *bool   `json:"useGlobalRate,omitempty"`
}
