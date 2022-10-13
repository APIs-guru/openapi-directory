package shared

type GoogleCloudRetailV2RuleBoostAction struct {
	Boost          *float32 `json:"boost"`
	ProductsFilter *string  `json:"productsFilter"`
}
