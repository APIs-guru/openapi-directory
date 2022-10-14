package shared

type OrderLineItemAdjustment struct {
	PriceAdjustment *Price  `json:"priceAdjustment,omitempty"`
	TaxAdjustment   *Price  `json:"taxAdjustment,omitempty"`
	Type            *string `json:"type,omitempty"`
}
