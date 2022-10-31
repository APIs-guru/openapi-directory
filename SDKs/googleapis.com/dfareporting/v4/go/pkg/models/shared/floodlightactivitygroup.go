package shared




type FloodlightActivityGroupTypeEnum string

const (
    FloodlightActivityGroupTypeEnumCounter FloodlightActivityGroupTypeEnum = "COUNTER"
FloodlightActivityGroupTypeEnumSale FloodlightActivityGroupTypeEnum = "SALE"
)


type FloodlightActivityGroup struct {
    AccountID *string `json:"accountId,omitempty"`
    AdvertiserID *string `json:"advertiserId,omitempty"`
    AdvertiserIDDimensionValue *DimensionValue `json:"advertiserIdDimensionValue,omitempty"`
    FloodlightConfigurationID *string `json:"floodlightConfigurationId,omitempty"`
    FloodlightConfigurationIDDimensionValue *DimensionValue `json:"floodlightConfigurationIdDimensionValue,omitempty"`
    ID *string `json:"id,omitempty"`
    IDDimensionValue *DimensionValue `json:"idDimensionValue,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    SubaccountID *string `json:"subaccountId,omitempty"`
    TagString *string `json:"tagString,omitempty"`
    Type *FloodlightActivityGroupTypeEnum `json:"type,omitempty"`
    
}

