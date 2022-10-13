package shared

type OrderLineItemAdjustment struct {
	PriceAdjustment *Price  `json:"priceAdjustment"`
	TaxAdjustment   *Price  `json:"taxAdjustment"`
	Type            *string `json:"type"`
}
