package shared

// Sku
// Information about SKUs appearing in the cost estimate.
type Sku struct {
	DisplayName *string `json:"displayName,omitempty"`
	Prices      []Price `json:"prices,omitempty"`
	Sku         *string `json:"sku,omitempty"`
}
