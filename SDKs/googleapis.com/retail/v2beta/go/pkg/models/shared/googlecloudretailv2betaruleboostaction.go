package shared

// GoogleCloudRetailV2betaRuleBoostAction
// A boost action to apply to results matching condition specified above.
type GoogleCloudRetailV2betaRuleBoostAction struct {
	Boost          *float32 `json:"boost,omitempty"`
	ProductsFilter *string  `json:"productsFilter,omitempty"`
}
