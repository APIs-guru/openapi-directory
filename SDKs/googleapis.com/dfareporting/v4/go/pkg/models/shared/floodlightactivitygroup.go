package shared

type FloodlightActivityGroupTypeEnum string

const (
	FloodlightActivityGroupTypeEnumCounter FloodlightActivityGroupTypeEnum = "COUNTER"
	FloodlightActivityGroupTypeEnumSale    FloodlightActivityGroupTypeEnum = "SALE"
)

type FloodlightActivityGroup struct {
	AccountID                               *string                          `json:"accountId"`
	AdvertiserID                            *string                          `json:"advertiserId"`
	AdvertiserIDDimensionValue              *DimensionValue                  `json:"advertiserIdDimensionValue"`
	FloodlightConfigurationID               *string                          `json:"floodlightConfigurationId"`
	FloodlightConfigurationIDDimensionValue *DimensionValue                  `json:"floodlightConfigurationIdDimensionValue"`
	ID                                      *string                          `json:"id"`
	IDDimensionValue                        *DimensionValue                  `json:"idDimensionValue"`
	Kind                                    *string                          `json:"kind"`
	Name                                    *string                          `json:"name"`
	SubaccountID                            *string                          `json:"subaccountId"`
	TagString                               *string                          `json:"tagString"`
	Type                                    *FloodlightActivityGroupTypeEnum `json:"type"`
}
