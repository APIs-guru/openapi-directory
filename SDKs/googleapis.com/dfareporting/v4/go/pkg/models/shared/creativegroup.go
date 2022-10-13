package shared

type CreativeGroup struct {
	AccountID                  *string         `json:"accountId"`
	AdvertiserID               *string         `json:"advertiserId"`
	AdvertiserIDDimensionValue *DimensionValue `json:"advertiserIdDimensionValue"`
	GroupNumber                *int32          `json:"groupNumber"`
	ID                         *string         `json:"id"`
	Kind                       *string         `json:"kind"`
	Name                       *string         `json:"name"`
	SubaccountID               *string         `json:"subaccountId"`
}
