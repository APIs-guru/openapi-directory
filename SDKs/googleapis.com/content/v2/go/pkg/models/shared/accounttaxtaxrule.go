package shared

type AccountTaxTaxRule struct {
	Country       *string `json:"country"`
	LocationID    *string `json:"locationId"`
	RatePercent   *string `json:"ratePercent"`
	ShippingTaxed *bool   `json:"shippingTaxed"`
	UseGlobalRate *bool   `json:"useGlobalRate"`
}
