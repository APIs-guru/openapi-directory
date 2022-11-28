package shared

// GoogleCloudRetailV2alphaRuleBoostAction
// A boost action to apply to results matching condition specified above.
type GoogleCloudRetailV2alphaRuleBoostAction struct {
	Boost          *float32 `json:"boost,omitempty"`
	ProductsFilter *string  `json:"productsFilter,omitempty"`
}
