package shared



type OrderLegacyPromotionBenefit struct {
    Discount *Price `json:"discount,omitempty"`
    OfferIds []string `json:"offerIds,omitempty"`
    SubType *string `json:"subType,omitempty"`
    TaxImpact *Price `json:"taxImpact,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

