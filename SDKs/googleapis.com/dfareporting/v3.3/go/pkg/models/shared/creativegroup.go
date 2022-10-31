package shared



type CreativeGroup struct {
    AccountID *string `json:"accountId,omitempty"`
    AdvertiserID *string `json:"advertiserId,omitempty"`
    AdvertiserIDDimensionValue *DimensionValue `json:"advertiserIdDimensionValue,omitempty"`
    GroupNumber *int32 `json:"groupNumber,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    SubaccountID *string `json:"subaccountId,omitempty"`
    
}

