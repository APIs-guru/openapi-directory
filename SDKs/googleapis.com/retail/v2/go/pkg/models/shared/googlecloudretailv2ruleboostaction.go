package shared

// GoogleCloudRetailV2RuleBoostAction
// A boost action to apply to results matching condition specified above.
type GoogleCloudRetailV2RuleBoostAction struct {
	Boost          *float32 `json:"boost,omitempty"`
	ProductsFilter *string  `json:"productsFilter,omitempty"`
}
