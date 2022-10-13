package shared

type TargetingTemplate struct {
	AccountID                   *string                      `json:"accountId"`
	AdvertiserID                *string                      `json:"advertiserId"`
	AdvertiserIDDimensionValue  *DimensionValue              `json:"advertiserIdDimensionValue"`
	DayPartTargeting            *DayPartTargeting            `json:"dayPartTargeting"`
	GeoTargeting                *GeoTargeting                `json:"geoTargeting"`
	ID                          *string                      `json:"id"`
	KeyValueTargetingExpression *KeyValueTargetingExpression `json:"keyValueTargetingExpression"`
	Kind                        *string                      `json:"kind"`
	LanguageTargeting           *LanguageTargeting           `json:"languageTargeting"`
	ListTargetingExpression     *ListTargetingExpression     `json:"listTargetingExpression"`
	Name                        *string                      `json:"name"`
	SubaccountID                *string                      `json:"subaccountId"`
	TechnologyTargeting         *TechnologyTargeting         `json:"technologyTargeting"`
}
