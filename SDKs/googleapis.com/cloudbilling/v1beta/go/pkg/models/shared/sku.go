package shared

type Sku struct {
	DisplayName *string `json:"displayName"`
	Prices      []Price `json:"prices"`
	Sku         *string `json:"sku"`
}
