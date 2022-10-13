package shared

type OrderPromotion struct {
	ApplicableItems     []OrderPromotionItem `json:"applicableItems"`
	AppliedItems        []OrderPromotionItem `json:"appliedItems"`
	EndTime             *string              `json:"endTime"`
	Funder              *string              `json:"funder"`
	MerchantPromotionID *string              `json:"merchantPromotionId"`
	PriceValue          *Price               `json:"priceValue"`
	ShortTitle          *string              `json:"shortTitle"`
	StartTime           *string              `json:"startTime"`
	Subtype             *string              `json:"subtype"`
	TaxValue            *Price               `json:"taxValue"`
	Title               *string              `json:"title"`
	Type                *string              `json:"type"`
}
