package shared



type RegionalInventory struct {
    Availability *string `json:"availability,omitempty"`
    CustomAttributes []CustomAttribute `json:"customAttributes,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Price *Price `json:"price,omitempty"`
    RegionID *string `json:"regionId,omitempty"`
    SalePrice *Price `json:"salePrice,omitempty"`
    SalePriceEffectiveDate *string `json:"salePriceEffectiveDate,omitempty"`
    
}

