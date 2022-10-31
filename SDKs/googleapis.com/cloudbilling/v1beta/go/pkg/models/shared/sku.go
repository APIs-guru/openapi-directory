package shared

type Sku struct {
	DisplayName *string `json:"displayName,omitempty"`
	Prices      []Price `json:"prices,omitempty"`
	Sku         *string `json:"sku,omitempty"`
}
