package shared

// PriceList
// A list of item price information. Price lists are structured as one or more price lists, each containing one or more sections with one or more items. For example, food price lists may represent breakfast/lunch/dinner menus, with sections for burgers/steak/seafood.
type PriceList struct {
	Labels      []Label   `json:"labels,omitempty"`
	PriceListID *string   `json:"priceListId,omitempty"`
	Sections    []Section `json:"sections,omitempty"`
	SourceURL   *string   `json:"sourceUrl,omitempty"`
}
