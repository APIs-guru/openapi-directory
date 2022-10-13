package shared

type PriceList struct {
	Labels      []Label   `json:"labels"`
	PriceListID *string   `json:"priceListId"`
	Sections    []Section `json:"sections"`
	SourceURL   *string   `json:"sourceUrl"`
}
