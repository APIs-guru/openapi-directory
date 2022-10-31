package shared



type TargetingTemplate struct {
    AccountID *string `json:"accountId,omitempty"`
    AdvertiserID *string `json:"advertiserId,omitempty"`
    AdvertiserIDDimensionValue *DimensionValue `json:"advertiserIdDimensionValue,omitempty"`
    DayPartTargeting *DayPartTargeting `json:"dayPartTargeting,omitempty"`
    GeoTargeting *GeoTargeting `json:"geoTargeting,omitempty"`
    ID *string `json:"id,omitempty"`
    KeyValueTargetingExpression *KeyValueTargetingExpression `json:"keyValueTargetingExpression,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LanguageTargeting *LanguageTargeting `json:"languageTargeting,omitempty"`
    ListTargetingExpression *ListTargetingExpression `json:"listTargetingExpression,omitempty"`
    Name *string `json:"name,omitempty"`
    SubaccountID *string `json:"subaccountId,omitempty"`
    TechnologyTargeting *TechnologyTargeting `json:"technologyTargeting,omitempty"`
    
}

