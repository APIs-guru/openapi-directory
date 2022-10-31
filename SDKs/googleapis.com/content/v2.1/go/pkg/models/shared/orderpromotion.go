package shared

type OrderPromotion struct {
	ApplicableItems     []OrderPromotionItem `json:"applicableItems,omitempty"`
	AppliedItems        []OrderPromotionItem `json:"appliedItems,omitempty"`
	EndTime             *string              `json:"endTime,omitempty"`
	Funder              *string              `json:"funder,omitempty"`
	MerchantPromotionID *string              `json:"merchantPromotionId,omitempty"`
	PriceValue          *Price               `json:"priceValue,omitempty"`
	ShortTitle          *string              `json:"shortTitle,omitempty"`
	StartTime           *string              `json:"startTime,omitempty"`
	Subtype             *string              `json:"subtype,omitempty"`
	TaxValue            *Price               `json:"taxValue,omitempty"`
	Title               *string              `json:"title,omitempty"`
	Type                *string              `json:"type,omitempty"`
}
