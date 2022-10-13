package shared

type OrderLegacyPromotionBenefit struct {
	Discount  *Price   `json:"discount"`
	OfferIds  []string `json:"offerIds"`
	SubType   *string  `json:"subType"`
	TaxImpact *Price   `json:"taxImpact"`
	Type      *string  `json:"type"`
}
